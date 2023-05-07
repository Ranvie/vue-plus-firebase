import { auth, db } from '@/firebaseConfig';
import router from '@/router';
import databaseStorage from '@/model/DatabaseStorage';
import convertProducts from '@/model/ConvertProducts';
import sortList from '@/model/SortList';

export default 
{
  data()
  {
    return {
      products: [],
      isAdmin: false,
      lastVisible: {}
    }
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

      if(!this.isAdmin)
      {
        router.push({ name: "Login" });
      }
      else
      {
        product = this.convertSubmitToProduct(submitEvent); //TODO: verify if any input is blank;

        this.getProducts(true, '').then(() => {
          aux = this.newProductList(this.products, product, 'name', 'name');
          saveToDb = { id: 'products_0', count: aux.length.toString(), products: JSON.stringify(aux) };
          this.products = aux;
          
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
    getProducts(forceUpdate = false, orderBy = 'name')
    {
      return new Promise((resolve) => {
        if(!forceUpdate && databaseStorage.isDataExistsAndNotExpiredLocal('products'))
        {
          this.products = databaseStorage.readFromLocalStorage('products', orderBy, 'value[0].products')
          resolve();
        }
        else
        {
          databaseStorage.readFromDatabaseCaching(db, 'products', 'id', 1, 'products_0', 'AT', 'products', '1h').then((cached) => {
            this.products = convertProducts.getProductList(cached, orderBy)
            resolve();
          });
        }
      })
    }
  }
}