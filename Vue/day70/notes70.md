# 电商购物平台项目
## 1. 使用Vue CLI4初始化项目

## 2. Git&github

## 3. 搭建项目文件目录结构




在css文件夹中加入normalize.css

base.js中的.root{}表示根选择器，在这里就是代表html

### 配置别名
创建vue.config.js文件
在文件中写入
```js
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
```
