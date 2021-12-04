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