import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载
const routes = [
  {
    path: '/a',
    name: 'a',
    component: () => import('../views/a.vue')
  },
  {
    path: '/b',
    name: 'b',
    component: () => import('../views/b.vue')
  },
  {
    path: '/c',
    name: 'c',
    component: () => import('../views/c.vue')
  },
  {
    path: '/',
    redirect: '/a'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router