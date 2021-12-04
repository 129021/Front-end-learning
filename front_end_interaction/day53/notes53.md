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
### 4. 注册路由模块
```js
// 1. 导入路由模块
const router=require('./03-router')
// 2. 注册路由模块
app.use(router)
```
### 5. 为路由模块添加前缀
类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也十分简单
```js
// 1. 导入路由模块
const userRouter=require('./router/user.js')

//2. 使用app.use()注册路由模块，并添加统一的访问前缀 /api
app.use('/api',userRouter)
```
# 2. Express中间件
## 2.1. 中间件的概念
### 1. 什么是中间件
> 中间件(Middleware)，特指业务流程的中间处理环节

### 2. Express中间件的调用流程
当一个请求到达Express服务器之后，可以连续 调用多个中间件，从而对这次请求进行**预处理**
### 3. Express中间件的格式
Express中间件，本质上就是一个function处理函数，Express中间件的格式如下：
![](2021-12-04-15-03-23.png)

注意：中间件函数的形参列表中，必须包含next参数，而路由处理函数中只包含req和res

### 4. next函数的作用
> next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或者路由

## 2.2. Express中间件的初体验
### 1. 定义中间件函数
可以通过以下方式，定义一个最简单的中间件函数
```js
const { application } = require('express')
const express=require('express')

const app=express()

// 定义一个最简单的中间件函数
const mw=function (req,res,next){
    console.log('这是最简单的中间件函数');

    //把流转关系，转交给下一个中间件或者路由
    next()
}

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})
```

### 2. 全局生效的中间件
> 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件

通过调用`app.use(中间件函数)`，即可定义一个全局生效的中间件，示例代码如下：
```js
// 将mw注册为全局生效的中间件
app.use(mw)
```
### 3. 定义全局中间件的简化形式
```js
// 这是定义全局中间件的简化形式
app.use(function (req, res, next) {
    console.log('这是最简单的中间件函数');

    //把流转关系，转交给下一个中间件或者路由
    next()
})
```
### 4. 中间件的作用
> 多个中间件之间，可以共享同一份req和res，基于这样的特性，我们可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，供下游的中间件或者路由进行使用

```js
const {
    application
} = require('express')
const express = require('express')

const app = express()




// 这是定义全局中间件的简化形式
app.use(function (req, res, next) {

    // 获取到请求到达服务器的时间
    const time=Date.now()

    // 为req对象，挂载自定义属性，从而把时间共享给后面的所用路由
    req.startTime=time


    //把流转关系，转交给下一个中间件或者路由
    next()
})

app.get('/', (req, res) => {
    res.send('Home page'+req.startTime)
})

app.get('/user', (req, res) => {
    res.send('User page'+req.startTime)
})
app.listen(80, () => {
    console.log('http://127.0.0.1');
})
```
### 5. 定义多个全局中间件
可以使用`app.use()`连续定义多个全局中间件，客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用，示例代码如下：
```js   
const express=require('express')
const app=express()

// 定义第一个全局中间件、
app.use((req,res,next)=>{
    console.log('调用了第一个全局中间件');
    next()
})

// 定义第二个全局中间件
app.use((req,res,next)=>{
    console.log('调用了第二个全局中间件');

    next()
})

// 定义一个路由
app.get('/user',(req,res)=>{
    res.send('User page')
})

app.listen(80,()=>{
    console.log('http://1217.0.0.1');
})
```

### 6. 局部生效的中间件
> 不使用`app.use()`定义的中间件，叫做局部生效的中间件

示例代码如下：
```js
const express = require('express')
const app = express()

// 定义中间件函数 
const n = mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next()
}

// 定义一个路由
app.get('/', mw1, (req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://1217.0.0.1');
})
```
### 7. 定义多个局部中间件
可以在路由中，通过如下两种等价的方式，使用多个局部中间件：
```js
const express = require('express')
const app = express()

// 定义中间件函数 
const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件');
    next()
}

const mw2 = (req, res, next) => {
    console.log('调用了第二个局部生效的中间件');
    next()
}

// 定义一个路由
// app.get('/', mw1,mw2,(req, res) => {
//     res.send('Home page')
// })

// 或者将中间件函数用一个数组包起来
app.get('/', [mw1,mw2],(req, res) => {
    res.send('Home page')
})

app.get('/user', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://1217.0.0.1');
})
```
### 8. 了解中间件的5个使用注意事项
- 一定要在路由**之前**注册中间件
- 客户端发过来的请求，可以**连续调用**多个中间件进行处理
- 执行完中间件的业务代码之后，不要忘记调用`next()`函数
- 为了防止代码逻辑混乱，调用完`next()`函数之后不要再写额外的代码
- 连续调用多个中间件时，多个中间件之间，共享req和res对象

## 2.3. 中间件的分类
为了方便大家理解和记忆中间件的使用，Express官方把常见的中间件用法，分为了5大类，分别是：
- 应用级别的中间件
- 路由级别的中间件
- 错误级别的中间件
- Express内置的中间件
- 第三方的中间件

### 1. 应用级别的中间件
> 通过`app.use()`或者`app.get()`或者`app.post()`，绑定到app实例上的中间件，叫做应用级别的中间件

示例代码：
```js
// 应用级别的中间件（全局中间件）
app.use((req,res,next)=>{
    next()
})

// 应用级别的中间件（局部中间件）
app.get('/',mw1,(req,res)=>{
    res.send('Home page')
})
```
### 2. 路由级别的中间件
> 绑定到`express.Router()`实例上的中间件，叫做路由级别的中间件

它的用法和应用级别的中间件没有任何区别，只不过，应用级别的中间件时绑定到app实例上，路由级别的中间件绑定到router实例上

示例代码：
```js
var app=express()
var router=express.Router()

// 路由级别的中间件
router.use(function(res,req,next){
    console.log('Time',Date.now())
    next()
})

app.use('/'.router)
```
### 3. 错误级别的中间件
> 错误级别的中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题

格式：错误级别中间件的function处理函数中，必须有4个形参，形参顺序从前到后，分别是`(err,req,res,next)`

```js
const express = require('express')
const app = express()


// 定义一个路由
app.get('/',(req, res) => {
    // 1.1 人为的制造错误
    throw new Error('服务器内部发生了错误')

    res.send('Home page')
})

// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err,req,res,next)=>{
    console.log('发生了错误'+err.message);
    res.send('Error'+err.message)
})

app.listen(80, () => {
    console.log('http://1217.0.0.1');
})
```

注意：错误级别的中间件必须注册在所有路由之后

### 4. Express内置级别的中间件
> 自Express4.16.0版本开始，Express内置了3个常用的中间件，极大地提高了Express项目的开发效率和体验

他们分别是：
- `express.static`快速托管静态资源的内置中间件，例如：html文件、图片、css样式等（无兼容性）
- `express.json`解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本可用）
- `express.urlencoded`解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）

```js
const express = require('express')
const app = express()


// 除了错误级别的中间件，其他的中间件必须在错误之前

//通过express.json()这个中间件，解析表单中json格式的数据
app.use(express.json())

// 通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({extended:false}))

// 定义一个路由
app.post('/user',(req, res) => {
    // 在服务器可以使用req.body这个属性来接收客户端发送过来的请求体数据

    //默认情况下如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);

    res.send('ok')
})

app.post('/book',(req,res)=>{
    // 在服务器端，可以通过req.body来获取JSON格式的表单数据和url-encoded格式的数据
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log('http://1217.0.0.1');
})
```
### 5. 第三方的中间件
> 非Express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件

在项目中，可以按需下载并配置第三方中间件，从而提高项目的开发效率

例如：在express@4.16.0之前的版本，经常使用body-parser这个第三方中间件，来解析请求体数据。使用步骤如下：
- 运行`npm i body-parser`安装中间件
- 使用require导入中间件
- 调用`app.use()`注册并使用中间件

```js
const express = require('express')
const app = express()

// 如果没有配置任何解析表单数据的中间件，则req.body默认等于undefined

// 1. 导入解析表单数据的中间件
const parser=require('body-parser')

// 2. 使用app.use()注册中间件
app.use(parser.urlencoded({extended:false}))

// 定义一个路由
app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://1217.0.0.1');
})
```
注意：Express内置的express.urlencoded中间件，就是基于body-parser这个第三方中间件进一步封装出来的
## 2.4. 自定义中间件
### 1. 需求描述与实现步骤
自己手动模拟一个类似于`express.urlencoded`这样的中间件，来解析post提交到服务器的表单数据

实现步骤：
- 定义中间件
- 监听req的data事件
- 监听req的end事件
- 使用querystring模块解析请求体数据
- 将解析出来的数据挂载到req.body
- 将自定义中间件封装为模块


### 2. 定义中间件
> 使用`app.use()`来定义全局生效的中间件

代码：
```js
app.use(function(req,res,next){
    //中间件的业务逻辑
})