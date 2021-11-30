// 1.1 导入http模块
const http=require('http')
// 1.2 导入fs文件系统模块
const fs=require('fs')
// 1.3 导入path路径模块
const path=require('path')

// 2.1 创建web服务器
const server=http.createServer()

// 2.2 监听web服务器的request事件
server.on('request',(req,res)=>{
    // 3.1 获取到客户端请求的URL地址
    const url=req.url
    // 3.2 把请求的URL地址映射为具体文件的存放路径
    const fpath=path.join(__dirname,url)

    // 4.1 根据映射过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        //4.2读取失败，向客户端响应固定的错误消息
        if(err)return res.end('404 Not found')
        // 4.3 读取成功，将读取成功的内容响应给客户端
        res.end(dataStr)

    })
})

// 2.3 启动服务器
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})