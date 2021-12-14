## 8.3. 计算属性的setter和getter
每个计算属性 都包含一个setter和一个getter
一般情况下，只用到getter来读取，在某些情况下，也可以提供一个setter方法（不常用）

```js
    <div id="app">
        <h2>{{fullName}}</h2>
    </div>

    <script src="../js/vue.js"></script>

    <script>
        const app = new Vue({
            el: '#app',
            data: {
                firstName: 'Jianqin',
                lastName: 'Wang',
            },
            methods: {},
            computed: {

                // 计算属性一般是没有set方法，只读属性
                fullName: {
                    set: function () {

                    },
                    get: function () {
                        return this.firstName+' '+this.lastName
                    }
                }

            }
        });
    </script>
```
## 8.4. 计算属性的缓存

计算属性相对于methods的优势是：
- 让代码变得简洁
- 提高性能,计算属性会进行缓存，如果多次使用时，计算属性只会调用一次

```js
    <div id="app">
        <!-- 1. 直接拼接 -->
        <h2>{{firstName}} {{lastName}}</h2>

        <!-- 2. 通过定义methods -->
        <h2>{{getFullName()}}</h2>

        <!-- 3. 通过computed -->
        <h2>{{fullName}}</h2>
    </div>

    <script src="../js/vue.js"></script>

    <script>
        const app = new Vue({
            el: '#app',
            data: {
                firstName: 'Jianqin',
                lastName: 'Wang',
            },
            methods: {
                getFullName: function () {
                    return this.firstName + ' ' + this.lastName
                }
            },
            computed: {
                fullName: function () {
                    return this.firstName + ' ' + this.lastName
                }
            }
        });
    </script>
```
# 9. ES6知识补充
## 9.1. let/var

事实上var的设计可以看成JavaScript语言设计上的错误，但是这种错误多半不能修复和移除，需要向后兼容，Brendab Eich就决定解决这个问题，于是他添加了一个新的关键字：let

let可以被看做一个更完美的var

JavaScript设计之初只有函数是有作用域的。其他像是for if等都是没有作用域的。以前使用var作为变量的时候，为了解决引用外面变量造成变量污染的问题，必须借助function的作用域来解决，即使用闭包这样的手段。

ES6中加入了`let`，let是有if和for块级作用域的


```html
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <button>按钮6</button>
    <script>
        // 1.变量作用域
        // {
        //     var name = 'spongebob';
        //     console.log(name);
        // }
        // console.log(name);



        // 没有块级作用域引起的问题:if 的块级
        // if(true){
        //     var name="abc"
        // }

        // console.log(name);

        // 没有块级作用域引起的问题 for的块级
        var btns=document.getElementsByTagName('button')

        for (var i=0;i<btns.length;i++){
            btns[i].addEventListener('click',function(){
                console.log('第'+i+'个按钮被点击了');
            })
        }
    </script>
```

## 9.2. const的使用
const关键字：
- 在很多语言中已经存在，主要的作用是将某个变量修饰为常量
- 在JavaScript中也是如此，使用`const`修饰的标识符为常量，不可以再次赋值

什么时候使用const
- 当我们修饰的标识符不会被再次赋值时，就可以使用`const`来保证数据的安全性

建议：在开发中优先使用`const`，只有需要改变某一个标识符的时候，才使用`let`


```html
<script>
    // 1. 一旦给const修饰的标识符被赋值后，不能修改
    // const name="spongebob";
    // name="abc"

    // 2. 在使用const定义标识符必须进行赋值
    // const name;

    // 3. 常量的含义是指向的对象不能修改，但是可以改变对象内部的属性
    const obj={
        name:'spongebob',
        age:3,
        adress:'pineapple house'
    }

    console.log(obj);

    obj.name='Patrick Star'
    obj.age=18
    obj.adress='stone house'
    console.log(obj);
</script>
```

## 9.3. 对象字面量的增强写法
```html
<script>
    // 1. 属性的增强写法
    const name = 'spongebob'
    const age = '12'
    const height = 1.0

    // ES5的写法
    // const obj = {
    //     name: name,
    //     age: age,
    //     height: height
    // }

    // ES6的写法
    const obj = {
        name,
        age,
        height
    }

    console.log(obj);


    // 2. 函数的增强写法
    // ES5的写法
    const obj = {
        run: function () {

        },
        eat: function () {

        }
    }

    // ES6的写法
    const obj = {
        run() {},
        eat() {}
    }
</script>
```

# 10. 事件监听
> 监听事件用`v-on`指令

v-on介绍
- 作用：绑定事件监听器
- 缩写：@
- 预期：Function|Inline Statement|Object
- 参数：event

## 10.1. v-on的基本使用

```html
<div id="app">
    <h2>{{counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
</div>

<script src="../js/vue.js"></script>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            counter:0
        },
        methods: {
            increment() {
                this.counter++
            },
            decrement() {
                this.counter--
            }
        }
    });
</script>
```

## 10.2. v-on参数
```html
<div id="app">
    <!-- 事件调用的方法没有参数 -->
    <button @click="btn1Click">button1</button>

    <!-- 在事件定义时，写参数时省略了小括号，但是方法本身是需要一个参数的，这个时候，Vue会默认将浏览器生成的event事件对象作为参数传入到方法 -->
    <button @click="btn2Click(123)">button2</button>


    <!-- 方法定义时，我们需要event对象，同时又需要其他参数 -->
    <!-- 在调用方法时，如何手动的获取到浏览器参数的event对象：$event -->
    <button @click="btn3Click(123,$event)">button3</button>


</div>

<script src="../js/vue.js"></script>

<script>
    const app = new Vue({
        el: '#app',
        data: {},
        methods: {
            btn1Click(){
                console.log('btn1Click');
            },
            btn2Click(event){
                console.log(event,'-------');
            },
            btn3Click(abc,event){
                console.log(abc,event);
            }
        }
    });
</script>
```

## 10.3. v-on修饰符

在某些情况下，我们拿到event的目的可能是进行一些事件处理

Vue提供了修饰符来帮助我们方便的处理一些事件：
- `.stop` 相当于调用event.stopPropagation(),可以用来消除事件冒泡
- `.prevent` 相当于调用event.preventDefault()
- `.{keyCode|keyAlias}` 只当事件是从特定键触发时才触发回调
- `.native` 监听事件根元素的原生事件
- `.once` 只触发一次回调


```html
<div id="app">
    <div @click="divClick">
        <!--1. 使用 .stop 修饰符 解决事件冒泡问题 -->
        <button @click.stop="btnClick">BUTTON</button>
    </div>

    <!-- 2. 使用 .prevent 修饰符 阻止默认事件 -->

    <br/>
    <form action="baidu">
        <input type="submit" value="submit" @click.prevent="submitClick">
    </form>


    <!-- 3. 监听某个键盘的键的点击 -->
    <input type="text" @keyup.enter="keyUp">


    <!-- 4. 自定义组件 -->
    <!-- <cpn @click.native="cpnClick"></cpn> -->

    <!-- 5.  .once修饰符的使用 -->
    <button @click.once="btn2Click">button2</button>
</div>

<script src="../js/vue.js"></script>

<script>
    const app = new Vue({
        el: '#app',
        data: {},
        methods: {
            btnClick() {
                console.log("btnClick");
            },
            divClick() {
                console.log("divClick");
            },
            submitClick(){
                console.log('submitClick');
            },
            keyUp(){
                console.log('keyUp');
            },
            // cpnClick(){

            // },
            btn2Click(){
                console.log('btn2Click');
            }
        }
    });
</script>
```

# 11. 条件判断 v-if v-esle-if v-else
这三个指令与JavaScript的条件语句if、else、else if类似
Vue的条件指令可以根据表达式的值在DOM中渲染或者销毁元素或者组件




