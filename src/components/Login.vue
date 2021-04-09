<template>
  <v-dialog class="basePage" width="500" v-model="dialogLogIn">
    <template v-slot:activator="{ on }">
      <v-btn large class="homebutton text--black font-weight-bold" plain v-on="on">Log in</v-btn>
    </template>
    <v-card>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">

      <form class="formdesign" @submit.prevent="submitLogIn">
        <div @click="dialogLogIn = !dialogLogIn"><v-icon class="close">mdi-close</v-icon></div>
        <h1>Log in!</h1>
        <br />
        <hr />
        <br />
        <div>
          <span class="text">Log in with</span>
        </div>
        <br />
        <div class="wrapper">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <div class="button" @click="facebookLogIn">
            <div class="icon-facebook">
              <i><v-icon class="pb-1" size="40">mdi-facebook</v-icon></i>
            </div>
          </div>
          <div class="button" @click="googleLogIn">
            <div class="icon-google">
              <i><v-icon class="pb-1" size="35">mdi-google</v-icon></i>
            </div>
          </div>
        </div>
        <br />
        <div class="separator text">or via E-Mail</div>
        <br />

        <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()">
        </v-text-field>

        <v-text-field
            label="Password"
            type="password"
            v-model="password"
            :error-messages="passwordErrors"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()">
        </v-text-field>
        <br />
        <div align="center">
          <v-btn class="mr-4" type="submit" :loading="loading">submit</v-btn>
          <v-btn class="bttn" @click="clear">clear</v-btn>
        </div>
        <br />
        <br />
        <hr class="text"/>
        <div class="text">
          <span>Don't have an account yet?</span>
          <v-btn text class="ml-3" float="right"
                 @click="dialogLogIn = !dialogLogIn">Sign up</v-btn>
        </div>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
  name: "login",
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: {required, minLength: minLength(6)}
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    loading: false,
    dialogLogIn: false
  }),
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if(!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      !this.$v.password.minLength && errors.push('Password must be at least 6 characters long')
      return errors
    },
  },
  methods: {
    submitLogIn () {
      this.loading = true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.dialogLogIn = false;
        this.loading = false;
      }).catch((err) => {
        console.log(err)
      })
    },
    googleLogIn () {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
        console.log('Success logged in with Google')
        this.dialogLogIn = false;
      }).catch((err) => {
        console.log(err)
        console.log('Failed to log in with Gooogle')
      });
    },
    facebookLogIn () {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(() => {
        console.log('Success logged in with Facebook')
        this.dialogLogIn = false;
      }).catch((err) => {
        console.log(err)
        console.log('Failed to log in with Facebook')
      })
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.password = ''
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
.basePage {
  justify-content: center;
  background-color: floralwhite;
  font-family: 'Lato', sans-serif;
}
.formdesign {
  align: center;
  text-align: center;
  padding: 60px;
  font-family: 'Lato', sans-serif;
  background: whitesmoke;
}
.bttn {
  margin-left: 6px;
}
.homebutton{
  background-color: hsl(47, 95%, 49%);
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
.close {
  align:right;
  float: right;
}
.close:hover {
  cursor:pointer;
  background-color: #e3e3fd;
}
</style>
