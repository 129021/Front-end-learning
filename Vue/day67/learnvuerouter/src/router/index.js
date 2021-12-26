import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'

const Home = () => import('../views/Home.vue')
const HomeNews = () => import('../views/HomeNews.vue')
const HomeMessage = () => import('../views/HomeMessage.vue')
const About = () => import('../views/About.vue')
const User = () => import('../views/User.vue')
const Profile = () => import('../views/Profile.vue')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    },
    children: [{
        path: '',
        redirect: 'news'
      },
      {
        // 子路由的path前面不需要加/
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      title:'关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userId',
    component: User,
    name:'User',
    meta:{
      title:'用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'档案'
    },
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 前置钩子(hook)
router.beforeEach((to,from,next)=>{

  // 从from跳转到to 
  document.title=to.matched[0].meta.title
  next()
})



// 后置钩子
router.afterEach((to,from)=>{
  // console.log('--------------------');
})

export default router