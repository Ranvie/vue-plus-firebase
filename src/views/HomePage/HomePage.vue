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
      <button class="reloadButton"><img src="@/assets/svg/Reload.svg" title="Reload products" alt="Reload all products from table" @click="getProducts(true)"/></button>
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

<script src="@/views/HomePage/HomePage.js"></script>
<style src="@/views/HomePage/HomePage.css" scoped></style>