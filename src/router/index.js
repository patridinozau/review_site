import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import despreNoi from '../views/despreNoi.vue'
import Navbar from '../components/Navbar.vue'

Vue.use(VueRouter)
Vue.component('Navbar', Navbar)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/despreNoi',
    name: 'despreNoi',
    component: despreNoi
  }

]

const router = new VueRouter({
  routes
})

export default router
