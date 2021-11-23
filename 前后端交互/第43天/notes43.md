# 1. form表单的基本使用
## 1.1 什么是表单  
表单在网页中主要负责**数据采集功能**。HTML中的&lt;from&gt;标签，就是用于采集用户输入的信息，并通过&lt;form&gt;标签的提交操作，把采集到的信息提交到服务器端进行处理。
## 1.2 表单的组成部分   
表单由三个基本部分组成：
**表单标签**
**表单域**
表单域包含了文本框、密码框、隐藏框、多行文本框、复选框、单选框、下拉框和文件上传框等
**表单按钮**
## 1.3 &lt;form&gt;标签的属性
&lt;form&gt;标签用来采集数据，&lt;form&gt;标签的属性则是用来规定如何把收集到的数据发送到服务器
![](Snipaste_2021-11-22_20-53-06.png)
### 1. action
action属性用来规定当提交表单时，向何处发送表单数据
action的属性应该是后端提供的一个URL地址，这个URL地址专门负责接收表单提交过来的数据
当 &lt;form&gt;表单为指定action属性值的情况下，action的默认值为当前页面的URL地址
**注意**：当提交表单后，页面会立即跳转到action属性指定的URL页面
### 2. target
target属性用来规定在**何处打开actionURL**
它的可选值有5个，默认情况下，target的值是_self,表示在相同框架打开action URL
![](2021-11-22-21-12-54.png)
### 3. method
method属性用来规定以**何种方式**把表单数据提交到action URL
它的可选值有两个：get和post
默认情况下，method的值为get，表示通过URL地址的形式，把表单数据提交到action URL
**注意：**
get 方式适合用来提交少量的简单的数据
post方式适合用来提交大量的，复杂的，或者包含文件上传的数据
在实际开发中，&lt;form&gt;表单的post提交方式用的最多，很少用get，例如登陆、注册、添加数据等操作，都需要使用post方式来提交表单
### 4. enctype
enctype属性用来规定在发送表单数据之前如何对数据进行编码
它的可选值有三个：
默认：application/x-www-form-urlencoded 表示在发送前编码所有的字符
![](2021-11-23-09-53-54.png)
**注意:**
在涉及到**文件上传**的操作时，必须将enctype的值设置为**multipart/form-data**
不涉及文件上传，默认
## 1.4 表单的同步提交及缺点
### 1. 什么是表单的同步提交
通过点击submit按钮，触发表单的提交操作，从而使页面跳转到action URL的行为，叫做表单的同步提交
### 2. 表单同步提交的缺点
- &lt;form&gt;表单同步提交之后，整个页面会发生跳转，跳转到action URL所指向的地址，用户体验很差
- &lt;form&gt;表单同步提交之后，页面之前状态和数据会消失
### 3. 如何解决表单同步提交的缺点
解决方案：**表单只负责采集数据，Ajax负责将数据提交到服务器**
# 2. 通过Ajax提交表单数据
## 2.1. 监听表单提交时间
在jQuery中，可以使用以下两种方式，监听到表单的提交事件：
- 方法1：
```javascript
$('#form1').submit(function(e){
    alert('监听到了表单的提交事件')
})
```
- 方法2：
```javascript
$('#form1).on('submit',function(e){
    alert('监听到了表单的提交事件')
})
```
## 2.2. 阻止表单默认提交行为    
当监听到表单的提交事件以后，可以调用事件对象的event.preventDefault()函数，来阻止表单的提交和页面的跳转，示例代码如下：
- 方法1：
```javascript
$('#form1').submit(function(e){
    e.preventDefault()
})
```
- 方法2：
```javascript
$('#form1).on('submit',function(e){
    e.preventDefault()
})
```
## 2.3. 快速获取表单中的数据
### 1. serialize()函数
为了简化表单中的数据获取操作，jQuery提供了serialize()函数，其语法格式如下：
```javascript
$(selector).serialize()
```
好处：**可以一次性获取到表单中所有的数据**
### 2. serialize()函数示例
注意：在使用serialize()函数获取表单元素时，**必须为每个表单元素添加name属性**