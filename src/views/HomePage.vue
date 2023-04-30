<template>
  <header>
    <router-link to="/login">Login</router-link>
  </header>
  <main>
    <div class="container">
      <form id="createEntry" v-if="isAdmin" @submit.prevent="handleSubmit">
        <table>
          <tr>
            <td><input type="text" placeholder="Name" name="name"></td>
            <td><input type="text" placeholder="Description" name="description"></td>
            <td><input type="number" placeholder="Price" name="price" min="0" step=".01"></td>
            <td><input type="number" placeholder="Stock" name="stock" min="0"></td>
          </tr>
        </table>
        <button type="submit">Save</button>
      </form>
      <div class="marginTop30"></div>
      <button class="reloadButton"><img src="@/assets/Reload.svg" title="Reload products" alt="Reload all products from table" @click="getProducts(true)"/></button>
      <table id="showProducts">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
        <tr v-for="(product, i) in products" :key="i">
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>${{Number.parseFloat(product.price).toFixed(2).toString()}}</td>
          <td>{{product.stock}}</td>
        </tr>
      </table>
    </div>
  </main>
  <footer>

  </footer>
</template>

<script>
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
        customLocalStorage.setItem('products', JSON.stringify(this.products), '1D');
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
</script>

<style scoped>
  header a{
    color: var(--light-blue);
    font-size: 25px;
    font-weight: 900;
    margin-left: 90%;
  }

  table#showProducts{
    border: 1px solid black;
    border-spacing: 0;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  table#showProducts th{
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }

  table#showProducts th:last-child{
    border-right: none;
  }

  table#showProducts th, table#showProducts td{
    text-align: center;
    padding: 10px 30px;
  }

  #createEntry table{
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 20px;
  }

  #createEntry button{
    margin-left: 80%;
    transform: translateX(-80%);
    padding: 5px 20px;
    color: white;
    text-shadow: 0.5px 0.5px 0.5px black;
    font-weight: 900;
    background-color: rgb(35, 195, 35);
    border: 0;
    border-radius: 20px;
  }

  #createEntry button:hover{
    cursor: pointer;
  }

  .container{
    width: 70%;
    margin: auto;
  }

  .reloadButton{
    margin-left: 50%;
    height: 25px;
    width: 25px;
    background: none;
    border: none;
  }

  .reloadButton:hover{
    cursor: pointer;
    filter: invert(100%);
  }

  .reloadButton img{
    height: inherit;
    width: inherit;
    color: black;
  }

  .marginTop30{
    margin-top: 30px;
  }
</style>