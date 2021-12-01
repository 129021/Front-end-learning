// 在一个自定义模块中，默认情况下，module.exports={}

// 向module.exports对象上挂载一个username属性
module.exports.username='海绵宝宝'


// 向module.exports对象上挂载一个sayHello方法
module.exports.sayHello=function(){
    console.log('Hello');
}


// 让module.exports指向一个全新的对象
module.exports={
    nickname:'派大星',
    sayHi(){
        console.log('Hi');
    }
}