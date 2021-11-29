// 1.1 导入fs模块
const fs = require('fs')
// 1.2 导入path模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配<style>和<script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf8', function (err, dataStr) {
    // 2.2 读取HTML文件失败
    if (err) return console.log('读取HTML文件失败' + err.message);

    // 2.3 读取文件成功后，需要调用对应的三个方法，分别拆解出css,js,html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})


// 3.1 定义处理css样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1);

    // 3.3 将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // console.log(newCSS);

    // 3.4 调用fs.writeFile()方法，将提取的样式写入到clock目录中index.css的文件里面
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
        if (err) return console.log('写入css样式失败' + err.message);
        console.log('写入css样式成功');
    })
}


// 4.1 定义处理js脚本的方法
function resolveJS(htmlStr) {
    // 4.2 通过正则，提取对应的<script></script>标签内容
    const r2 = regScript.exec(htmlStr)

    // 3.3 将提取出来的样式字符串，进行字符串的replace替换操作
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    // 3.4 调用fs.writeFile()方法，将提取的样式写入到clock目录中index.js的文件里面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('写入js脚本失败' + err.message);
        console.log('写入js脚本成功');
    })
}

// 5.1 定义处理HTML结构的方法
function resolveHTML(htmlStr) {
    //5.2 将字符串调用replace方法，把内嵌的style和script标签替换为外联的link和script标签

    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

    // 5.3 写入index.html 这个文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if (err) return console.log('写入HTML文件失败'+err.message);

        console.log('写入HTML页面成功');
    })

}