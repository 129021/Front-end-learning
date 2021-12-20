var name='spongebob'
var age=3
var flag=true

function sum(num1,num2){
    return num1+num2

}

if (flag){
    console.log(sum(20,30));
}



// 1. 导出方式1：
export{
    flag,sum
}

// 2. 导出方式2:
export var num1=1000
export var height=1.2


// 3. 导出函数或者类
export function mul(num1,num2){
    return num1*num2
}

export class Person{
    run(){
        console.log('running......');
    }
}


// 4. export default(只能有一个)
const address='pineapple house'

export default address