# css
css构成：选择器+一条或多条声明
例如：
```css
h1 {color:red；font-size:25px;}
```
- 属性和属性值以键值对的形式出现     属性：属性值

# 选择器
分为基础选择器和复合选择器
基础选择器分为：标签选择器、类选择器、id选择器、通配符选择器

## 标签选择器：
以HTML标签名作为选择器
为页面中所有同一标签设置同一样式

```css
标签名 {
    属性1：属性值1；
    属性2：属性值2；
    属性3：属性值3；
    ……
}
```
## 类选择器：
差异化选择不同标签，单独选一个或几个相同或不同的标签

类名起名原则：
- 不能用标签的名字作为类名
- 不能使用纯数字、中文等命名
- 长名称可以使用中横线隔开 harry-potter
- 类命名参考web前端开发规范手册
```css
.类名{
    属性1：属性值1；
    ……
}
```
例如：
```
.red{
    color:red;
}
```

多类名使用方式：
各个类名中间用空格隔开 
```css
.类名1{
    ……
}
.类名2{
    ……
}
<div class="类名1 类名2">div-example</div>
```

## id选择器
HTML中以id属性来设置id选择器，CSS中id选择器以“#”来定义
只能调用一次，别人切勿使用
```css
#id名{
    属性1：属性值1；
}
```

## 通配符选择器：
在CSS中，通配符选择器使用“*”定义，他表示选取页面上的所用元素（标签）
```css
*{
    属性1：属性值1；
    ……
}
```



# CSS字体属性

## 字体系列
CSS使用font-family属性定义文本中的字体系列
多个单词组成的字体，如Times New Roman,最好用引号包围起来。
尽量使用系统自带的默认字体，保证任何用户在浏览器中都能正确显示

最常见的几个字体：
```css
body{
    font-family:'Microsoft YaHei',tahoma,arial,'Hiraino Sans GB';
}
 
p{
    font-family:'微软雅黑';
}

div{
    font-family:Arial,"Microsoft Yahei","微软雅黑";
}
```

## 字体大小
标题属性比较特殊，需要单独指定文字大小
```css
font-size
p{
    font-size:20px;
}
```

## 字体粗细
font-weight

实际开发中更提倡用数字表示粗细
数字后面不跟单位
bold（粗体）等价与number=700
normal（正常）等价于number=400
number=100-900


## 文字样式
font-style
主要使用场景：让倾斜的字体不倾斜
```css
p{
    font-style:normal;
}
```
两个属性值：
- normal：默认值，标准样式
- italic:斜体


## 字体复合属性
必须按照顺序：
```css
font: font-style font-weight font-size/line-height font-family
```
例如：
```css
div{
    font:italic 700 16px 'Microsoft Yahei'
}
```

不需要设置时可以省略（取默认值），但必须保留font-size和font-family属性，否则font属性将不起作用
例如：
```css
div{
    font:20px 'Microsoft YaHei';
}
```


# css文本属性
定义文本的外观
 
文本颜色
```css
color

div{
    color:red;
}
```
## 颜色表示：
预定义的颜色值：red,green,blue...
十六进制：#FF0000,FF6600...
rgb代码：rgb(255,0,0)...
(开发中最常用的是十六进制表示)


## 对齐文本
text-align
```css
div{
    text-align:center;
}
```
- 属性值：left(默认值),right,center



## 装饰文本
text-decoration
可以给文本添加下划线，删除线，上划线等
重点为如何添加/删除下划线
```css
div{
    text-decoration:underline;
}
```
属性值：
- none：默认,没有装饰线（最常用）
- underline:下划线，链接a自带下划线（常用）
- overline:上划线（几乎不用）
- line-through:删除线（不常用）



## 文本缩进
用来指定文本的第一行缩进，通常是段落的首行缩进
text-indent
```css
div{
    text-indent:10px;
}
```
通过设置该属性，所有元素的首行都可以缩进一个给定的长度，甚至该长度可以是一个负值

em：相对单位，相对于当前元素（font-size）1个文字的大小



## 行间距
line-height

用来设置行间的距离（行高）。可以控制文字行与行之间的距离。
行间距=上间距+文本高度+下间距
```css
p{
    line-height:26px;
}
```


# css引入方式
按照css样式书写的位置（或者引入的方式），css样式表可以分为三大类：
- 行内样式表（行内式）
- 内部样式表（嵌入式）
- 外部样式表（链接式）


## 内部样式表
写到HTML页面内部，是将css代码抽取出来，单独放到一个&lt;style&gt;标签中
```css
<style>
    div{
        color:red;
        font-size:12px;
    }
</style>
```

&lt;style&gt;标签理论上可以放在HTML文档的任何地方，但一般会放在&lt;head&gt;标签中。


## 行内样式表
在元素标签内部的style属性中设定css样式。适合于修改简单样式
```css
<div style="color:red;font-size:12px;>divexample</div>
```

## 外部样式表
核心是：样式单独写到css文件中，之后把css文件引入到HTML中使用
在HTML页面中，使用&lt;link&gt;标签引入css文件
```css
<link rel="stylesheet" href="css文件路径">
```


# chrome调试工具
