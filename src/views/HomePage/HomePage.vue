<template>
  <header>
    <router-link to="/login" tabindex="1">Login</router-link>
  </header>
  <main>
    <div class="container">
      <form id="createEntry" v-if="isAdmin" @submit.prevent="handleSubmit">
        <table>
          <tr>
            <td><input type="text" placeholder="Name" name="name" tabindex="2"></td>
            <td><input type="text" placeholder="Description" name="description" tabindex="2"></td>
            <td><input type="number" placeholder="Price" name="price" min="0" step=".01" tabindex="2"></td>
            <td><input type="number" placeholder="Stock" name="stock" min="0" tabindex="2"></td>
          </tr>
        </table>
        <button class="saveButton" type="submit" tabindex="2">Save</button>
      </form>
      <div class="marginTop30"></div>
      <button class="reloadButton"><img src="@/assets/svg/Reload.svg" title="Reload products" alt="Reload all products from table" @click="getProducts(true)" tabindex="2"/></button>
      <table id="showProducts">
        <tr>
          <th @click="getProducts(false, 'name')" @keyup.enter="getProducts(false, 'name')" tabindex="2">Name</th>
          <th @click="getProducts(false, 'description')" @keyup.enter="getProducts(false, 'description')" tabindex="2">Description</th>
          <th @click="getProducts(false, 'price')" @keyup.enter="getProducts(false, 'price')" tabindex="2">Price</th>
          <th @click="getProducts(false, 'stock')" @keyup.enter="getProducts(false, 'stock')" tabindex="2">Stock</th>
        </tr>
        <tr v-for="(product, i) in products" :key="i">
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>${{Number.parseFloat(product.price).toFixed(2).toString()}}</td>
          <td>{{product.stock}}</td>
        </tr>
      </table>
      <VuePageify pageSize="10" :listSize="this.productCount" @updateOffset="handleUpdateOffset"/>
    </div>
  </main>
  <footer>

  </footer>
</template>

<script src="@/views/HomePage/HomePage.js"></script>
<style src="@/views/HomePage/HomePage.css" scoped></style>