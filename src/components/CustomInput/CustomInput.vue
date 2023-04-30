<template>
  <label :for="label">{{label}}</label>
  <input :id="label" v-model="content" :type="type"/>
</template>

<script src="@/components/CustomInput/CustomInput.js"></script>
<style src="@/components/CustomInput/CustomInput.css" scoped></style>