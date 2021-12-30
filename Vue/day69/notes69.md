# 1. 网络模块封装
Vue中发送网络请求有很多方式：

- 选择一：传统的基于XMLHttpRequest的Ajax

- 选择二：jQuery-Ajax
- 选择三：Vue 1.x时，推出的Vue-resource
- 选择四：axios

## 1.1. 为什么选择axios
axios是官方推荐的库

功能特点：
- 在浏览器中发送XMLHttpRequests请求
- 在node.js中发送http请求
- 支持PromiseAPI
- 拦截请求和响应
- 转换请求和响应数据
- 等等


## 1.2. axios请求方式
支持多种请求方式：
- axios(config)
- axios.request(config)
- axios.get(url[,config])
- axios.delete(url[,config])
- axios.head(url[,config])
- axios.post(rul[,data[,config]])
- axios.put(url[,data[,config]])
- axios.patch(url[,data[,config]])

## 1.3. axios(config)基本使用方式
```js
axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1
  },
  method: 'get'
}).then(res => {
  console.log(res);
})
```

## 1.4. 发送并发请求
有时候，我们可能需要同时发送两个请求
使用`axios.all()`，可以放入多个请求的数组
`axios.all([])`返回的结果是一个数组，使用`axios.spread`可将数组[res1,res2]展开为res1,res2

```js
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/data',

}), axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:1
  }
})]).then(results => {
  console.log(results);
})
```
## 1.5. 全局配置
在上面的示例中，我们的baseURL是固定的
事实上，在开发中可能很多参数都是固定的
这个时候我们可以进行一些抽取，也可以利用axios的全局配置
```js
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
```

### 1.5.1. 常见的配置选项
- 请求地址 url:'/user',
- 请求类型 method:'get'
- 请求根路径 baseURL:'http://www.mt.com/api',
- 请求前的数据处理 transformRequest:[function(data){}]
- 请求后的数据处理 transformTesponse:[function(data){}]
- 自定义的请求头 headers:{'x-Requested-With':'XMLHttpRequest'}
- URL查询对象 parmas:{id:12}
- 查询对象序列化函数 paramsSerializer:function(params){}
- request body data:{key:'aa'}
- 超时设置s timeout:1000,
- 跨域是否带token withCredentials:false
- 自定义请求处理 adapter:function(resolve,reject,config){}
- 身份验证信息 auth:{uname:'',pwd:'12'}
- 响应式的数据格式json/blob/decument/arraybuffer/text/stream   responseType:'json'


## 1.6. axios的实例
为什么要创建axios的实例？
当我们从axios模块中导入对象时，使用的实例时默认的实例
当给实例设置一些默认配置时，这些配置就被固定下来了
但是在后续的开发中，某些配置可能会不太一样
比如某些请求需要使用特定的baseURL或者timeout或者content-Type等
这个时候，我们就可以创建新的实例，并且传入属于该实例的配置信息

## 1.7. 拦截器
axios提供了拦截器，用于我们在发送每次请求或者得到响应后，进行对应的处理

```js
    // 2. axios的拦截器
    // 2.1. 请求拦截
    instance.interceptors.request.use(config=>{
        // console.log(config);
        // 为什么要进行拦截
        // 1. 比如说config中的一些信息不符合服务器的要求
        // 2. 比如说每次发送网络请求时，都希望在界面中显示一个请求的图标
        // 3. 某些网络请求（比如登录），必须携带一些特殊的信息（比如token）
        return config
    },err=>{
        // console.log(err);
    })


    // 2.2. 响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res);
        return res.data
    },err=>{
        console.log(err);
    })
```


