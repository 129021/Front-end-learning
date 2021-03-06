# 1. html5的新特性
HTML5的新增特性主要是针对以前的不足，增加了一些新的标签和新的表单属性等

这些新特性都有兼容问题，基本上是IE9+以上版本的浏览器才支持，如果不考虑兼容性问题，可以大量使用这些新特性

## 1.1. HTML5新增的语义化标签
以前布局，我们基本用div来做，div对于搜索引擎来说是没有语义的
```css
<header>:头部标签
<nav>:导航标签
<article>:内容标签
<section>:定义文档某个区域
<aside>:侧边栏标签
<footer>:尾部标签
```
注意：
- 这种语义化标准主要是针对搜索引擎的
- 这些新标签页面中可以使用多次
- 在IE9中，需要将这些元素转化为块级元素
- 其实，移动端更喜欢这些标签
- HTML5还增加了很多其他标签


## 1.2. HTML5新增的多媒体标签
```css
音频<audio>
视频<video>
```
使用他们可以很方便的在页面中嵌入音频和视频，而不再去使用flash和其他浏览器插件

### 视频&lt;video&gt;
当前&lt;video&gt;元素支持三种视频格式：尽量使用MP4格式

语法：
```css
<video src="文件地址" controls="controls></video>
考虑兼容性问题：
<video> controls="controls" width="300">
    <source src="move.ogg" type="video/ogg">
    <source src="move.mp4" type="video/mp4">
    您的浏览器不支持<video>标签播放视频
</video>
```
视频&lt;video&gt;常见属性


### 音频&lt;audio&gt;
语法：
```css
<audio src="文件地址" controls="controls:></audio>
```
chrome禁止了video和audio的自动播放功能（autoplay）
视频添加muted属性静音来播放视频，音频不可以（可以通过javas解决）


## 1.3. html5新增的input类型


重点记住**number Tel search** 三个


## 1.4. HTML5新增的表单属性


可以通过一下设置方式修改placeholder里面的字体颜色
```css
input::placeholder{
    color:pink;
}
```


# 2. css3的新特性
## 2.1. css3的现状
新增的css3特性有兼容的问题，IE9+才支持
移动端支持优于PC端
不断改进中
应用相对广泛
现阶段主要学习：新增选择器和盒子模型以及其他特性


## 2.2. 属性选择器
属性选择器可以根据元素特定属性来选择元素，这样就可以不用借助于类和id选择器


注意：**类选择器、属性选择器、伪类选择器，权重为10**


## 2.3. 结构伪类选择器
结构伪类选择器主要根据文档结构来选择元素，常用于根据父级选择器里面的子元素


nth-child(n)选择某个父元素的一个或者多个特定的元素
- n可以是数字、关键字和公式
- n如果是数字，就是选择第n个子元素，里面数字从1开始
- child和()之间没有空格
- n可以是关键字：even偶数，odd奇数
- n可以是公式：常见的公式如下（如果n是公式，则从0开始计算，但是第0个元素或者超出了元素的个数会被忽略）


## 2.4. 伪元素选择器（重点）
伪元素选择器可以帮助我们利用css创建新标签元素，而不需要HTML标签，从而简化HTML结构

| 选择符   | 简介                     |
| -------- | ------------------------ |
| ::before | 在元素内部的前面插入内容 |
| ::after  | 在元素内部的后面插入内容 |

注意：
before和after创建一个元素，但是属于行内元素
新创建的这个元素在文档树中找不到，所以我们称之为伪元素

语法：
```css
element::before{}
```
before和after必须有content属性
before在父元素内容的前面创建元素，after在父元素的后面插入元素
伪元素选择器和标签选择器一样，权重为**1**


## 2.5. css3盒子模型
css3中可以通过box-sizing来指定盒模型，有2个值：即可指定为content-box，这样我们计算盒子大小的方式就发生了改变

可以分为两种情况：
```css
box-sizing:content-box盒子大小为width+padding+border（以前默认的）
box-sizing:border-box 盒子大小为width
```
如果盒子模型我们改为了box-sizing:border-box;那么padding和border就不会撑大盒子了（前提是border和padding不会超过width宽度）


## 2.6. css3其他特性（了解）
css3滤镜filter：
filter css属性将模糊或颜色偏移等图形效果应用于元素

语法：
```css
filter:函数(); 例如：filter:blur(5px); blur模糊处理 数值越大越模糊
```
css3 calc函数:
calc()此css函数可以让你在声明css属性值时执行一些计算

语法：
```css
width:calc(100%-80px);
```
括号里可以使用+-*/来进行计算
运算符前后必须要加空格


## 2.7. css3过渡（重点）
过渡(transition)使我们在不使用flash或者javascript的情况下，当元素从一种样式转换为另一种样式时为元素添加效果

过渡动画：是从一个状态渐渐地过渡到另一个状态

现在经常和:hover一起搭配使用

语法：
```css
transition:要过渡的属性 花费时间 运动曲线 何时开始；
```
- 属性：想要变化的css属性，宽度高度、背景颜色、内外边距都可以。想要所有的属性都变化过渡，写一个all就可以
- 花费时间：单位是秒（必须写单位）比如0.5s 
- 运动曲线：默认是ease（可以省略）
- 何时开始：单位是秒（必须写单位）可以设置延迟触发时间 默认是0s（可以省略）

过渡的使用口诀：**谁做过渡给谁加**