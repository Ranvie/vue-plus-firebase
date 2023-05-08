import VuePageify from '@/components/VuePageify/VuePageify.vue'

import { auth, db } from '@/firebaseConfig';
import router from '@/router';
import databaseStorage from '@/model/DatabaseStorage';
import convertProducts from '@/model/ConvertProducts';
import sortList from '@/model/SortList';
import paginate from '@/model/Paginate';

/* 
  TODO: Evaluate if is better to keep the table calling getProducts or separate it to another function.
  When making a filter based on a atribute, the productList found will be overwrited as soon the user clicks the
  table header to sort.
*/

export default 
{
  data()
  {
    return {
      products: [],
      productCount: 0,
      offset: 0,
      limit: 10,
      isAdmin: false,
      lastVisible: {}
    }
  },
  components: {
    VuePageify
  },
  mounted()
  {
    this.isUserAdmin();
    this.getProducts();
  },
  methods: 
  {
    isUserAdmin()
    {
      auth.onAuthStateChanged((user) => {
        if(auth.currentUser === null) { this.isAdmin = false; return; }

        user.getIdTokenResult(true).then((idTokenResult) => {
          this.isAdmin = idTokenResult.claims.admin === true; 
        })
      })
    },
    handleSubmit(submitEvent)
    {
      let product;
      let aux;
      let saveToDb;
      let allProducts;

      if(!this.isAdmin)
      {
        router.push({ name: "Login" });
      }
      else
      {
        product = this.convertSubmitToProduct(submitEvent); //TODO: verify if any input is blank;
        
        this.getProducts(true, '').then(() => {
          allProducts = databaseStorage.readFromLocalStorage('products', '', 'value[0].products');

          aux = this.newProductList(allProducts, product, 'name', 'name');
          saveToDb = { id: 'products_0', count: aux.length.toString(), products: JSON.stringify(aux) };
          this.products = paginate.createSublist(aux, this.offset, this.limit);
          this.productCount = aux.length;
          
          databaseStorage.saveToDatabase(db, 'products', 'products', saveToDb) //TODO: make a logic to enable saving to other products than products_0;
          databaseStorage.saveToLocalStorage('products', [saveToDb], '1h');
        });
      }
    },
    newProductList(products = [], newProduct = {}, orderBy = '', overwriteBy = '')
    {
      let index = this.isKeyValueRepeated(products, overwriteBy, newProduct[overwriteBy]);
      let result;

      if(index != -1)
      {
        result = products;
        result[index] = newProduct;
      }
      else
      {
        result = [...products, newProduct];
      }

      result = sortList.sort(result, orderBy);

      return result;
    },
    isKeyValueRepeated(objList = [], key = '', value = '')
    {
      return objList.findIndex((obj) => { return obj[key].toLowerCase() === value.toLowerCase() })
    },
    convertSubmitToProduct(submitEvent)
    {
      let product = {};

      for(let data of submitEvent.target)
      {
        if(data.localName !== 'input') { continue; }

        product[data.name] = data.value;
      }

      return product;
    },
    handleUpdateOffset(offset){
      this.offset = offset;

      this.getProducts(false, 'name', this.offset, this.limit);
    },
    getProducts(forceUpdate = false, orderBy = 'name')
    {
      let aux;

      return new Promise((resolve) => {
        if(!forceUpdate && databaseStorage.isDataExistsAndNotExpiredLocal('products'))
        {
          let aux = databaseStorage.readFromLocalStorage('products', '', 'value[0].products');

          this.products = sortList.sort(paginate.createSublist(aux, this.offset, this.limit), orderBy);
          this.productCount = aux.length;
          resolve();
        }
        else
        {
          databaseStorage.readFromDatabaseCaching(db, 'products', 'id', 1, 'products_0', 'AT', 'products', '1h')
          .then((cached) => {
            aux = convertProducts.getProductList(cached, '');

            this.products = sortList.sort(paginate.createSublist(aux, this.offset, this.limit), orderBy);
            this.productCount = aux.length;
            resolve();
          });
        }
      })
    }
  }
}