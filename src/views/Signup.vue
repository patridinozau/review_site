<template>
  <div>
    <navbar />
    <snackbar />

  <v-main>
    <div class="main">
      <section class="formdesign">
      <form  @submit.prevent="submitForm">
        <h1>Înscrie-te!</h1>
        <br />
        <hr />
        <br />
        <div>
          <span class="text">Înscrie-te cu</span>
        </div>
        <br />
        <div class="wrapper">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <div class="button">
            <div class="icon-facebook" @click="facebookSignUp">
              <i><v-icon class="pb-1" size="40" >mdi-facebook</v-icon></i>
            </div>
          </div>
          <div class="button" @click="googleSignUp">
            <div class="icon-google">
              <i><v-icon class="pb-1" size="35">mdi-google</v-icon></i>
            </div>
          </div>
        </div>
        <br />
        <div class="separator text">sau creează unul nou</div>
        <br />
        <div align="center">
          <v-text-field
              clearable
              prepend-inner-icon="mdi-account-circle"
              v-model="name"
              :error-messages="nameErrors"
              :counter="15"
              label="Nume"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()">
          </v-text-field></div>

        <v-text-field
            prepend-inner-icon="mdi-email"
            clearable
            v-model="email"
            :error-messages="emailErrors"
            label="E-Mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()">
        </v-text-field>

        <v-text-field
            prepend-inner-icon="mdi-key"
            clearable
            label="Parola"
            type="password"
            v-model="password"
            :error-messages="passwordErrors"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()">
        </v-text-field>
        <br />
        <div align="center">
          <v-btn class="mr-4 bttn"  style="font-family: 'Lato', sans-serif; font-weight: bold;" type="submit" :loading="loading">trimite</v-btn>
          <v-btn class="bttn"  style="font-family: 'Lato', sans-serif; font-weight: bold;" @click="clear">goleste</v-btn>
        </div>
        <br />
        <br />
        <hr class="text"/>
        <div class="text">
          <span>Ai deja un cont?</span>
          <v-btn class="ml-3" text  style="font-family: 'Lato', sans-serif; font-weight: bold;" float="right" @click="toLogIn">Autentifica-te</v-btn>
        </div>
      </form>

      </section>
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
    </div>

  </v-main>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import Navbar from "../components/Navbar";
import snackbar from "../components/snackbar";

export default {
  name: "signup",
  components: {
    'navbar': Navbar,
    'snackbar': snackbar
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(15), minLength: minLength(3) },
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    loading: false,
  }),
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Numele nu poate avea mai mult de 15 caractere')
      !this.$v.name.required && errors.push('Numele este obligatoriu')
      !this.$v.name.minLength && errors.push('Numele trebuie să conțină cel puțin 3 caractere')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-Mailul trebuie să fie valid')
      !this.$v.email.required && errors.push('E-mailul este obligatoriu')
      return errors
    },
    passwordErrors () {
      const errors = []
      if(!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Parola este obligatorie')
      !this.$v.password.minLength && errors.push('Parola trebuie să conțină cel puțin 6 caractere')
      return errors
    },
    user () {
      return this.$store.getters.user
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    user (value) {
      if(value !== null && value !== undefined) {
        this.$router.push('/')
        this.loading = false
      }
    },
    error (value) {
      if(value !== null && value !== undefined) {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.password = ''
        this.loading = false
      }
    }
  },
  methods: {
    submitForm () {
      this.loading = true;
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password, username:this.name})
    },
    googleSignUp () {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.$store.dispatch('signUserUpWithGoogle', provider)
    },
    facebookSignUp () {
      var provider = new firebase.auth.FacebookAuthProvider();
      this.$store.dispatch('signUserUpWithFacebook', provider)
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.password = ''
      this.loading = false
    },
    toLogIn () {
      this.$router.push('/Login')
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

.main {
  background: rgb(0,204,255);
  background: linear-gradient(180deg, rgba(0,204,255,0.1) 0%, rgba(0,204,255,0.2) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.formdesign {
  text-align: center;
  justify-content: center;
  align-content: center;
  padding: 60px;
  font-family: 'Lato', sans-serif;
  background: white;
  min-height: 800px;
  width: 40%;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
}
.bttn {
  margin-left: 6px;
}

.text {
  color: gray;
  font-family: 'Lato', sans-serif;
}
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  font-family: 'Lato', sans-serif;
}
.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid gray;
}
.separator:not(:empty)::before {
  margin-right: .25em;
}
.separator:not(:empty)::after {
  margin-left: .25em;
}
.wrapper .button {
  display: inline-block;
  height: 60px;
  width: 60px;
  align-content: center;
  margin: 0 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
}
.wrapper .button {
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  margin-left: 10px;
}
.wrapper .button {
  font-size: 25px;
  line-height: 60px;
}
.wrapper .button:hover .icon-facebook{
  background: rgb(54, 79, 243);
}
.wrapper .button:hover .icon-google{
  background: rgb(253, 59, 31);
}
.wrapper .button:hover .icon-facebook i{
  color: #fff;
}
.wrapper .button:hover .icon-google i {
  color: #fff;
}

.circle1,
.circle2,
.circle3,
.circle4 {
  background: white;
  background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: 7%;
  right: 20%;
  height: 7rem;
  width: 7rem;
}
.circle2 {
  bottom: 5%;
  left: 20%;
  height: 20rem;
  width: 20rem;
}

.circle3 {
  top: 17%;
  right:12%;
  height: 10rem;
  width: 10rem;
}

.circle4{
  top: 35%;
  left: 8%;
  height:11rem;
  width:11rem;
}

</style>
