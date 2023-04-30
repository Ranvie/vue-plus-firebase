<template>
  <header>

  </header>
  <main>
    <form @submit.prevent="handleSubmit">
      <h1 class="centralize">Login</h1>
      <hr>
      <div class="grid">
        <CustomInput v-for="(input, i) in inputs" :key="i" 
          :label="input.label" 
          v-model="input.value" 
          :type="input.type"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </main>
  <footer>

  </footer>
</template>

<script src="@/views/LoginPage/LoginPage.js"></script>
<style src="@/views/LoginPage/LoginPage.css" scoped></style>