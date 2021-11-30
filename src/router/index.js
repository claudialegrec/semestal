import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import Schedule from '../views/Schedule'
import UserInfo from '../views/UserInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: UserInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router