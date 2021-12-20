
// 使用CommonJS的模块化规范
const {add,mul} =require('./js/mathUtil.js')


console.log(add(1,2));
console.log(mul(3,4));

// 使用ES6的模块化规范 
import {name,age} from "./info"

console.log(name);
console.log(age);


// 依赖css文件
require('./css/normal.css')