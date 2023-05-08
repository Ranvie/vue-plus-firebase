<template>
  <div id="container">
    <button v-for="(button, index) in buttonCount" :key="index" @click="handleClick((index+1).toString())">{{index+1}}</button>
  </div>
</template>

<script src="@/components/VuePageify/VuePageify.js"></script>
<style src="@/components/VuePageify/VuePageify.css" scoped></style>