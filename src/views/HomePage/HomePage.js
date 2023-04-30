import { auth, db } from '@/firebaseConfig';
import router from '@/router';
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import customLocalStorage from '@/model/CustomLocalStorage'

export default {
  data(){
    return {
      products: [],
      isAdmin: false
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
        this.saveProduct(product);
      }
    },
    getProducts(forceUpdate = false)
    {
      if(!forceUpdate && customLocalStorage.getItem('products') && !customLocalStorage.isExpired('products')){
        this.readFromLocalStorage();
      }
      else{
        this.readFromDatabase();
        console.log("A");
      }
    },
    readFromLocalStorage(){
      this.products = JSON.parse(customLocalStorage.getKey('products', 'value'));
    },
    readFromDatabase(){
      let auxProds = [];

      getDocs(collection(db, "products")).then((prodDocs) => {
        prodDocs.forEach(prodDoc => {
          auxProds.push(prodDoc.data());
        })

        this.products = auxProds;
        customLocalStorage.setItem('products', JSON.stringify(this.products), '1h');
      })
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
    saveProduct(product)
    {
      setDoc(doc(db, "products", product.name), {
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock
      }).then(() => {
        this.getProducts();
      });
    }
  }
}