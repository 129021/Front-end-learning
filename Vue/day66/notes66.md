# 1. Vue CLI

## 1.1. 什么是Vue CLI 
使用Vue开发大型应用时，我们需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试等事情，如果每个项目都要手动完成这些工作，那无疑效率比较低效，所以通常我们会使用一些脚手架工具来帮助完成这些事情

#### CLI是什么意思
- CLI是Command-Line Interface，翻译为命令行界面，俗称脚手架
- Vue CLI是一个官方发布的Vue.js项目脚手架
- 使用Vue-CLI可以快速搭建Vue开发环境以及对应的webpack配置



## 1.2. Vue CLI的使用
####  安装Vue脚手架
```
npm install -g @vue/cli
```
#### 测试是否安装成功
```
vue --version
```

## 1.3. Vue CLI2
#### 项目初始化
```
vue webpack 项目名称（英文，不要用中文）
```

#### 项目作者
项目作者默认读取 git config
需要更改的话在文件目录：C:\Users\Admin中的.gitconfig中更改

#### 单元测试

e2e:end to end 端到端测试，安装Nightwatch，是一个利用selenium或webdriver或phantomjs等进行自动化测试的框架

                                                                                                                                            


Vue CLI 安装不成功 ：使用命令：
```
clean cache --force
```
相当于清空文件夹：
C:\Users\Admin\AppData\Roaming\npm-cache

#### 初始化时选择ESlint开启，之后想要关闭怎么办？
在config文件夹中index.js文件内 useEslint由true改为false

#### 项目初始化时runtime+compiler和runtime-only如何选择
##### 区别：
###### runtimecompiler:
```js
new Vue({
    el:'#app',
    template:'<App/>',
    components:{APP}
})
```
编译过程：template->ast->render->vdom->UI


###### runtimeonly:
```js
new Vue({
    el:'#app',
    render:h=>h(App)
})
```
编译过程：render->vdom->UI(性能更高，代码量更少)



# 2. Vue CLI3
## 2.1. 认识Vue CLI3
Vue-CLI3与2版本有很大区别：
- vue-cli3是基于webpack4打造
- vue-cli3的设计原则是0配置，移除配置文件根目录下的build和config等目录
- vue-cli3提供了vue ui命令，提供了可视化配置，更加人性化
- 移除了static文件夹，新增了public文件夹，并且index.html移动到public中

#### 初始化：
Please pick a preset(配置):

#### 删除自定义初始设置选项：
在文件目录下：C:\Users\Admin\.vuerc 删除presets中的想要删除的配置即可
rc:run command(运行终端)


## 2.2. ES6补充：箭头函数
```html
<script>
    // 箭头函数：也是一种定义函数的方式
    // 1. 定义函数的方式：function
    const a=function(){

    }
    
    // 2. 对象字面量中定义函数
    const obj={

        // 2.1. 
        b1:function(){

        },
        // 2.2. 
        b2(){

        }
    }

    // 3. 箭头函数
    const c=(参数列表)=>{

    }
</script>
```

## 2.3. vue-router


