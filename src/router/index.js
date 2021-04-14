import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DespreNoi from '../views/DespreNoi.vue'
import User from '../views/User.vue'
import store from "../store";
import categorii from "../components/categorii";

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
    path: '/user',
    name: 'User',
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
  }

]

const router = new VueRouter({
  routes
})

export default router
