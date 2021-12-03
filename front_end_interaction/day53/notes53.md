# 1. Express路由
## 1.1. 路由的概念
### 1. 什么是路由
广义上来说，路由就是**映射关系**

### 2. Express中的路由
在Express中，路由指的是**客户端的请求**与**服务器处理函数**之间的映射关系

Express中的路由分3部分组成：
- 请求的类型
- 请求的URL地址
- 处理函数

格式如下：
```js
app.METHOD(PATH,HANDLER)
```  
## 1.2. 路由的使用
### 1. 最简单的用法
在 Express中使用路由最简单的方式，就是把路由挂载到APP上，示例代码如下：
```js
const express=require('express')
const app=express()

// 挂载路由
app.get('/',(req,res)=>{
    res.send('hello world')

})

app.post('/',(req,res)=>{
    res.send('post request')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
```

### 2. 模块化路由
为了方便的对路由进行模块化的管理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块
步骤如下：
- 创建路由模块对应的.js文件
-  调用`express.Router()`函数创建路由对象
-  向路由对象上挂载具体的路由 
-  使用`module.exports`向外共享路由对象
-  使用`app.use()`函数注册路由模块

```js
// 这是路由模块
// 1. 导入express
const express=require('express')

// 2. 创建路由对象
const router=express.Router()

// 3.挂载具体的路由
router.get('/user/list',(req,res)=>{
res.send('get user list')
})

router.post('/user/add',(req,res)=>{
    res.send('add new user')
    })
// 4. 向外导出路由对象
module.exports=router
```
