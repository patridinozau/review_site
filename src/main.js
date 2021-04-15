import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import firebase from "firebase/app";
import 'firebase/auth'

Vue.use(Vuelidate)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAKH6HfHOXWv70iRwdUC9GBUxpbofjCdUA",
  authDomain: "itec-8b9cf.firebaseapp.com",
  databaseURL: "https://itec-8b9cf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "itec-8b9cf",
  storageBucket: "itec-8b9cf.appspot.com",
  messagingSenderId: "858959018814",
  appId: "1:858959018814:web:ba976e7c5f327acb63ca6f",
  measurementId: "G-ZCWFW020Z5"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadUsers')
  }
}).$mount('#app')