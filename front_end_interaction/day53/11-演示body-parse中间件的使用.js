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