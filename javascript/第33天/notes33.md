# 1. jQuery属性操作
## 1.1. 设置或获取元素固有属性值 prop()
所谓元素固有属性就是元素本身自带的属性，比如&lt;a&gt;元素里面的href

### 获取属性语法：
```javascript
prop('属性')
```
### 设置属性语法：
```javascript
prop('属性','属性值')
```

## 1.2. 设置或获取元素自定义属性值 attr()
### 获取属性语法：
```javascript
attr('属性')    //类似原生getAttribute()
```
### 设置属性语法:
```javascript
attr('属性','属性值')    //类似原生setAttribute()
```
该方法也可以获取H5自定义属性


## 1.3. 数据缓存data()
data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构，一旦页面刷新，之前存放的数据都将被移除



# 2. jQuery内容文本值
主要针对元素的内容还有表单的值操作

### (1)普通元素内容html()   (相当于原生innerHTML)
```javascript
html()    //获取元素的内容
html('内容')   //设置元素的内容
```

### (2)普通元素文本内容text()    (相当于原生innerText)



# 3. jQuery元素操作
主要是遍历、创建、添加、删除元素操作

## 3.1. 遍历元素
jQuery隐式迭代是对同一类元素做了相同的操作，如果想要给同一类元素做不同操作，就需要用到遍历

### 语法1：
```javascript
$('div').each(function (index,domEle){xxx;});
```
each()方法遍历匹配的每一个元素。主要是DOM处理
里面的回调函数有两个参数：index是每个元素的索引号；demEle是每个DOM元素对象，不是jQuery对象
所以想要使用jQuery方法，需要给这个DOM元素转化为jQuery对象 $(domEle)

### 语法2：
```javascript
$.each(object,function(index,element){xxx;});
```
$.each()方法可以用于遍历任何对象。主要用于数据处理，比如数组，对象
里面的函数有2个参数：index是每个元素的索引号；element遍历内容


## 3.2. 创建元素
语法：
```javascript 
$("<li></li>");
```
动态的创建了li标签


## 3.3. 添加元素
### (1)内部添加
```javascript
element.append('内容');
```
把内容放入匹配元素的最后面，类似原生appendChild

### (2)外部添加
```javascript
element.after('内容')   //把内容放入目标元素后面
element.before('内容')   //把内容放入目标元素前面
```
内部添加元素，生成之后是父子关系
外部添加元素生成之后是兄弟关系


## 3.4. 删除元素
```javascript
element.remove()    //删除匹配的元素（本身）
element.empty()     //删除匹配元素集合中的所有子节点
element.html('')    //清空匹配的元素内容
```


# 4. jQuery尺寸、位置操作
## 4.1. jQuery尺寸
（图：jQuery尺寸）
![](jQuery尺寸.png)

以上参数为空，则是获取响应值，返回的是数字型
如果参数为数字，则是修改响应值
参数可以不用写单位


## 4.2. jQuery的位置
位置主要有三个：**offset() position() scrollTop()/scrollLeft()**

### (1)offset() 设置或获取元素偏移

offset()方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系

### (2)position() 获取元素偏移

position()方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准

### (3)scrollTop()/scrollLeft()  
设置或获取元素被卷去的头部和左侧

scrollTop()方法设置或返回被选元素被卷去的头部、

### 带有动画的返回顶部：

核心原理：使用animate动画返回顶部
animate动画函数里面有个scrollTop属性，可以设置位置
但是是元素做动画，因此
```javascript
$('body,html').animate({scrollTop:0});
```


