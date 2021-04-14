import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DespreNoi from '../views/DespreNoi.vue'
import User from '../views/User.vue'
// import AuthGuard from './auth-guard'

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
    // beforeEnter: AuthGuard()
  }

]

const router = new VueRouter({
  routes
})

export default router
