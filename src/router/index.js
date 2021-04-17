import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DespreNoi from '../views/DespreNoi.vue'
import User from '../views/User.vue'
import store from "../store";
import categorii from "../components/categorii";
import categorie from "../views/categorie";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/despreNoi',
    name: 'DespreNoi',
    component: DespreNoi
  },
  {
    path: '/user/:id',
    name: 'User',
    props: true,
    component: User,
    beforeEnter: (to, from, next) => {
      if (store.getters.user) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/categorii',
    name: 'categorii',
    component: categorii
  },
  {
    path: '/categorii/categorie',
    name: 'categorie',
    component: categorie
  }

]

const router = new VueRouter({
  routes
})

export default router
