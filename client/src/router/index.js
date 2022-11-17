import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/productList.vue'
import ProductDetail from '../views/productDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'

import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path : '/',
    name : 'MainPage',
    component : MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
