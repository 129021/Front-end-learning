import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   },
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })


// 2. axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/data',

// }), axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:1
//   }
// })]).then(results => {
//   console.log(results);
// })


// 使用全局的axios和对应的配置进行网络请求

// baseURL全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000

// // axios.spread
// axios.all([axios({
//   url: '/home/multidata',

// }), axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:1
//   }
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))


// 4. 创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,

// })

// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })

// instance2({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })


// 5. 封装request模块
import {request} from './network/request'

request({
  url:'/home/multidata'
},res=>{
  console.log(res);
},err=>{
  console.log(err);
})
