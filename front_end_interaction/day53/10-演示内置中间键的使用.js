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