import { auth, db } from '@/firebaseConfig';
import router from '@/router';
import { getDocs, query, orderBy, setDoc, doc, collection } from 'firebase/firestore';
import customLocalStorage from '@/model/CustomLocalStorage'
import checkTypes from '@/model/CheckTypes'

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
        this.getProducts(true);
      });
    },
    getProducts(forceUpdate = false, orderBy = 'name')
    {
      if(!forceUpdate && customLocalStorage.getItem('products') && !customLocalStorage.isExpired('products')){
        this.readFromLocalStorage(orderBy);
      }
      else{
        this.readFromDatabase(orderBy);
      }
    },
    readFromLocalStorage(orderBy = 'name'){
      this.products = this.orderLocalStorage(orderBy);
    },
    orderLocalStorage(orderBy){
      let sorted = JSON.parse(customLocalStorage.getKey('products', 'value'));

      sorted.sort((a, b) => {
        if(this.isNumber(a[orderBy])) {
          return this.evaluateHigher(Number.parseFloat(a[orderBy]), Number.parseFloat(b[orderBy]));
        }

        return a[orderBy].localeCompare(b[orderBy], 'sv');
      });

      console.log(sorted);

      return sorted;
    },
    isNumber(value){
      return checkTypes.possibleTypes(value).includes('INT') ||
        checkTypes.possibleTypes(value).includes('FLOAT');
    },
    evaluateHigher(a, b){
      if(a > b) {return 1;}
      if(a < b) {return -1;}

      return 0;
    },
    readFromDatabase(orderByKey = 'name'){
      let auxProds = [];

      getDocs(query(collection(db, 'products'), orderBy(orderByKey))).then((prodDocs) => {
        prodDocs.forEach(prodDoc => {
          auxProds.push(prodDoc.data());
        })

        this.products = auxProds;
        customLocalStorage.setItem('products', JSON.stringify(this.products), '1h');
      })
    }
  }
}