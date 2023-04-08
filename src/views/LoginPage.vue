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

<script>
import CustomInput from '@/components/CustomInput.vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebaseConfig'
import router from '@/router'

export default {
  data()
  {
    return {
      inputs: {
        email: { label: 'Email', value: '', type: 'email' },
        password: { label: 'Password', value: '', type: 'password' }
      }
    }
  },
  components: {
    CustomInput
  },
  methods: {
    handleSubmit()
    {
      this.tryToLogin(this.inputs.email.value, this.inputs.password.value);
    }, //TODO: Check blank inputs and some other errors when sign in;
    tryToLogin(email, password)
    {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push({ name: "Home" });
      })
      .catch((err) => {
        if(err.code == "auth/user-not-found" || err.code == "auth/wrong-password")
        {
          alert("O Email ou a Senha estão incorretos.");
        }
        else
        {
          alert("Ocorreu um erro. Tente novamente mais tarde.");
        }
      })
    }
  }
}
</script>

<style scoped>
  form{
    width: 20%;
    margin: auto auto;
  }

  h1{
    color: var(--light-blue);
    margin: 50% 0 5px 0;
    font-size: 50px;
  }

  hr{
    margin: 0 0 40px 0;
  }

  button{
    margin: 30px auto 0 10%;
    width: 80%;
    height: 30px;
    color: white;
    background-color: var(--light-blue);
    border: 0;
    border-radius: 20px;
  }

  button:hover{
    cursor: pointer;
    opacity: 0.8;
  }

  .grid{
    display: grid;
    grid-template-columns: 1fr 3fr;
    row-gap: 15px;
  }

  .centralize{
    text-align: center;
  }
</style>