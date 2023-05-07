import { auth, db } from '@/firebaseConfig';
import router from '@/router';
import databaseStorage from '@/model/DatabaseStorage';
import convertProducts from '@/model/ConvertProducts';

export default {
  data(){
    return {
      products: [],
      isAdmin: false,
      lastVisible: {}
    }
  },
  mounted(){
    this.isUserAdmin();
    this.getProducts();
  },
  methods: {
    async isUserAdmin()
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
      if(!this.isAdmin)
      {
        router.push({ name: "Login" });
      }
      else
      {
        /* eslint-disable */
        let product = this.convertSubmitToProduct(submitEvent); //TODO: verify if any input is blank;
      
        //TODO: update the file that is on the firebase setting the new value into the products list;
      }
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
    async getProducts(forceUpdate = false, orderBy = 'name')
    {
      if(!forceUpdate && databaseStorage.isDataExistsAndNotExpiredLocal('products')){
        this.products = databaseStorage.readFromLocalStorage('products', orderBy, 'value[0].products');
      }
      else{
        databaseStorage.readFromDatabaseCaching(db, 'products', 'id', 1, 'products_0', 'AT', 'products', '1h').then((cached) => {
          this.products = convertProducts.getProductList(cached, orderBy);
        });
      }
    }
  }
}