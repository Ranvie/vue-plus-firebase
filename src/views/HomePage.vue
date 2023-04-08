<template>
  <header>
    <router-link to="/login">Login</router-link>
  </header>
  <main>
    <div class="container">
      <form id="createEntry" v-if="isAdmin"> <!-- Check if the user connected is the admin -->
        <table>
          <tr>
            <td><input type="text" placeholder="Name"></td>
            <td><input type="text" placeholder="Description"></td>
            <td><input type="number" placeholder="Price"></td>
            <td><input type="number" placeholder="Stock"></td>
          </tr>
        </table>
        <button type="submit">Save</button>
      </form>
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
          <td>{{product.price}}</td>
          <td>{{product.stock}}</td>
        </tr>
      </table>
    </div>
  </main>
  <footer>

  </footer>
</template>

<script>
import { auth } from '@/firebaseConfig';

export default {
  data(){
    return {
      products: [
        {name: 'Apple', description: 'Apple', price: '$0.23', stock: '6'},
        {name: 'Pineapple', description: 'Pineapple', price: '$0.72', stock: '3'}
      ],
      isAdmin: false
    }
  },
  mounted(){
    this.isUserAdmin();
  },
  methods: {
    async isUserAdmin()
    {
      auth.onAuthStateChanged((user) => {
        if(auth.currentUser === undefined) { return false; }

        user.getIdTokenResult(true).then((idTokenResult) => {
          this.isAdmin = idTokenResult.claims.admin === true; 
        })
      })
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
    margin-top: 30px;
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

  .container{
    width: 70%;
    margin: auto;
  }
</style>