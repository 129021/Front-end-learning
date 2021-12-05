const express = require('express')

const app = express()

// 1. 导入自己封装的中间件模块
const customBodyParser=require('./14-custom-body-parse')

// 2. 将自定义的中间件注册为全局可用的中间件
app.use(customBodyParser)

app.post('/user',(req,res)=>{
    res.send(req.body)
})


app.listen(80, function () {
    console.log('http://127.0.0.1');
})