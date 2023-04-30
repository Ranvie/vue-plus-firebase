import CustomInput from '@/components/CustomInput/CustomInput.vue'
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