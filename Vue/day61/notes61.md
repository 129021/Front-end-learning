# 1. 简单认识Vue.js
- Vue（读音类似于view）
- Vue是一个渐进式的框架
  - 渐进式意味着可以将Vue作为应用的一部分嵌入其中，带来更丰富的交互体验
  - 如果希望将更多的业务使用Vue实现，那么Vue的核心库和生态系统也能满足要求
  - 比如：Core+Vue-router+Vuex
- Vue有很多特点和Web开发中常见的高级功能：
  - 解耦视图和数据
  - 可复用的组件
  - 前端路由技术
  - 状态管理
  - 虚拟DOM


# 2. Vue.js安装
安装方式：
- CDN引入
- 下载和引入(Vue官网下载Development Version,初学使用)
- npm安装

# 3. Hello Vuejs
原生JavaScript编程范式：命令式编程
Vue编程范式：声明式编程

声明式编程可以让数据和界面完全分离


##  3.1. Vue的响应式：
创建Vue对象的时候，传入了一些options:{}
- {}包含了`el`属性：该属性决定了这个Vue对象挂载到哪一个元素上
- {}中包含了data属性：该属性通常会储存一些数据
  - 这些数据可以是直接定义出来的
  - 也可能来自网络，从服务器加载的

代码示例：
```js
<div id="app">{{message}}</div>

<script>
    const app=new Vue({
        el:'#app',  // 用于挂载要管理的元素
        data:{  //定义数据
            message:'message test'

        }
    })


    // 原生js的做法（编程范式：命令式编程）
    // 1. 创建div元素
    // 2. 定义一个变量message
    // 3. 将message变量放在前面的div元素中显示
</script>
```
## 3.2. Vue列表显示
使用`v-for`指令，就不需要在JavaScript代码中完成DOM的拼接相关操作了

而且是响应式的，当数组中数据发生改变时，界面会自动改变
```js
<div id="app">
    <ul>
        <li v-for="item in movies">{{item}}</li>
    </ul>
</div>

<script>
    const app=new Vue({
    el:'#app',
    data:{
        message:'你好',
        movies:['film1','film2','film3','film4','film5']
    }
})
</script>
 ```

 ## 3.3. 案例-计数器
 ```js
<div id="app">
    <h2>当前计数：{{counter}}</h2>
    <!-- <button v-on:click="counter++">+</button>
    <button v-on:click="counter--">-</button> -->

    <button v-on:click="add">+</button>
    <button v-on:click="sub">-</button>
</div>
<script src="../js/vue.js"></script>


<script>
    const app = new Vue({
        el: '#app',
        data: {
            counter: 0
        },

        methods: {
            add: function () {
                // console.log('add被执行');
                this.counter++
            },
            sub: function () {
                // console.log('sub被执行');
                this.counter--
            }
        }
    })
</script>
```

- 新的属性：`methods`，该属性用于在Vue对象中定义方法
- 新的指令：`@click`,该指令用于监听某个元素的点击事件，并且需要指定当点击发生时，执行的方法（方法通常是methods中定义的方法）

# Vue中的MVVM
什么是MVVM？

![](2021-12-13-09-37-23.png)

- View层：
  - 视图层
  - 在前端开发中，通常就是DOM层
  - 主要的作用就是给用户展示各种信息
- Model层：
  - 数据层
  - 数据可能是固定的数据，也可能是服务器请求下来的数据
- VueModel层：
  - 视图模型层
  - 视图模型层是View和Model沟通的桥梁
  - 一方面它实现了Data Banding,也就是数据绑定，将Model的改变实时的反映到View中
  - 另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件（点击、滚动等）时，可以监听到，并在需要的情况下改变对应的Data










