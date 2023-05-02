import { auth, db } from '@/firebaseConfig';
import router from '@/router';
import databaseStorage from '@/model/DatabaseStorage';

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
        let product = this.convertSubmitToProduct(submitEvent); //TODO: verify if any input is blank;
        databaseStorage.saveToDatabase(db, 'products', product.name, product).then(() => {
          this.getProducts(true);
        });
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
        this.products = databaseStorage.readFromLocalStorage('products', orderBy);
      }
      else{
        databaseStorage.readFromDatabase(db, 'products', orderBy, 10).then((found) => {
          this.products = found;
        });
      }
    }
  }
}