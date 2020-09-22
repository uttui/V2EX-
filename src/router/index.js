import Vue from 'vue'
import VueRouter from 'vue-router'
import biao from '../views/biao.vue'
import detail from '../views/details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'biao',
    component: biao
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  }
]

const router = new VueRouter({
  routes
})

export default router
