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