# 1. npm与包
## 1.1包管理配置文件
npm规定，在项目根目录里面，必须提供一个叫做`package.json`的包管理配置文件。用来记录一些与项目相关的配置信息，例如：
- 项目的名称，版本号，描述等
- 项目中都用到了哪些包
- 哪些包只在开发期间会用到
- 哪些包在开发和部署时都需要用到

### 1. 多人协作的问题
遇到的问题：第三方包的体积过大，不方便团队成员之间共享项目源代码

解决方案：共享时剔除`node_moudles`

### 2. 如何记录在项目中安装了哪些包
在项目目录中，创建一个叫做`package.json`的配置文件，即可用来记录项目中安装了哪些包，从而方便剔除`node_moudles`目录后，在团队成员之间共享项目的源代码

注意：今后的项目开发中，一定要把`node_moudles`文件夹，添加到`.gitignore`忽略文件中

### 3. 快速创建`package.json`
npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建`package.json`这个包管理配置文件：
```js
npm init -y
```

注意：
- 上述命令只能在英文的目录下成功运行，所以，项目文件夹下的名称一定要使用英文名称，不要使用中文，不能出现空格
- 运行`npm install`命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到`package.json`中


### 4. `dependencies`节点
`package.json`文件中，有一个`dependencies`节点，专门用来记录使用`npm install`命令安装了哪些包

### 5. 一次性的安装所有的包

当我们拿到一个剔除了`node_moudles`的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来
否则会出现类似下面的错误：
```
Error:Cannot find moudle 'moment'
```

可以运行`npm install`命令（或者`npm i`）一次性安装所有的包：
```
npm install
```
