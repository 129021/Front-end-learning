// 在外界使用require方法导入一个自定义模块的时候，得到的成员就是那个模块中通过module.exports指向的那个对象
const m=require('./11-自定义模块.js')
console.log(m);
