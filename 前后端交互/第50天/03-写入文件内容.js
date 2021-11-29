// 1. 导入fs文件系统模块
const fs=require('fs')

// 2.调用fs.writeFile()方法 写入文件的内容

// - 参数1：必选参数，字符串，表示文件的路径
// - 参数2：必选参数，表示要写入的内容
// - 参数3：可选参数，表示以什么编码格式来读取文件
// - 参数4：必选参数，文件读取完成后，通过回调函数拿到读取的结
fs.writeFile('files/3.txt','txt3',function(err){
    // 如果文件写入成功，则err的值为null
    // 如果文件写入失败，则err的值为写入对象
    // console.log(err);
    if (err){
        return console.log('文件写入失败！'+err.message);
    }
    console.log('文件写入成功!');
})

