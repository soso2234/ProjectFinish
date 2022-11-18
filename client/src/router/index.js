import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import About from '../views/AboutPage.vue'
import Service from '../views/ServicePage.vue'
import Contact from '../views/ContactPage.vue'
import Properties from '../views/PropertiesPage.vue'

const routes = [
  {
    path : '/',
    name : 'MainPage',
    component : MainPage
  },
  {
    path : '/about',
    name : 'AboutPage',
    component : About
  },
  {
    path : '/service',
    name : 'ServicePage',
    component : Service
  },
  {
    path : '/contact',
    name : 'ContactPage',
    component : Contact
  },
  {
    path : '/properties',
    name : 'PropertiesPage',
    component : Properties
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
