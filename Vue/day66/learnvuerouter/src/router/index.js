import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 1. 通过Vue.use(插件),安装插件
Vue.use(VueRouter)

const routes = [
  // {
  //   path:'../',
  //   redirect: '/views/Home.vue'
  // },
  {
    path: '/',
    name: 'Home',

    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


// 2. 创建VueRouter对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  // 在routers里面配置路径和组件之间的映射关系，这里是将routers抽取出去，单独创建一个数组
  routes
})


// 3. 将router对象传入到Vue实例
export default router
