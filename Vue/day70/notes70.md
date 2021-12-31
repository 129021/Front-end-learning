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

### 统一代码格式
创建.editorconfig文件(vscode在项目文件夹右键选择Generate .editorconfig)

在文件中写入：
```js
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### 项目的模块化划分
tabbar和路由的映射关系

更换标签页中的favicon图标：
在public文件夹下的favicon.ico文件，用新的图标覆盖掉原来的就可以
