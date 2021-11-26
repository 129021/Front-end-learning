# 1. 了解同源策略和跨域
## 1.1. 同源策略
### 1. 什么是同源
如果两个页面的**协议**，**域名**和**端口**都相同，则两个页面具有相同的源

例如下表给出了相对于http://www.test.com/index.html页面的同源检测：
![](2021-11-25-17-28-14.png)
### 2. 什么是同源策略
同源策略（英文全称：Same origin policy）是**浏览器**提供的一个**安全功能**

MDN官方给定的概念：同源策略限制了从同一个源加载的文档或者脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制

通俗理解：浏览器规定,A网站的JavaScript，不允许和非同源的网站C之间，进行资源的交互

例如：
- 无法读取非同源网页的cookie、LocalStorage和IndexedDB
- 无法接触非同源网页的DOM
- 无法向非同源地址发送ajax请求

## 1.2. 跨域
### 1. 什么是跨域
同源指两个URL协议、域名、端口一致，反之就是跨域
（只要协议、域名、端口三项中有任何一项不一致就是跨域）

出现跨域的根本原因：**浏览器的同源策略**不允许非同源的URL之间进行资源的交互
### 2. 浏览器对跨域请求的拦截
![](2021-11-25-17-46-24.png)
浏览器允许发起跨域请求，但是，跨域请求回来的数据，会被浏览器拦截，无法被页面获取到

### 3. 如何实现跨域数据请求
两种解决方案：**JSONP**和**CORS**

JSONP:出现较早，兼容性好。是前端程序员为了解决跨域问题，被迫想出来的一种 **临时解决方案**。缺点是 **只支持get请求** ，不支持post请求

CORS：出现较晚，是W3C标准，属于跨域Ajax请求的根本解决方案。支持GET和POST请求。缺点是兼容性较差

# 2， JSONP
## 2.2. JSONP的实现原理
由于浏览器的同源策略的限制，网页中无法通过Ajax请求非同源的接口数据。但是&lt;script&gt;标签不受浏览器同源策略的影响，可以通过src属性，请求非同源的js脚本

因此，JSONP的实现原理，就是通过&lt;script&gt;标签的src属性，请求跨域的数据接口，并通过**函数调用**的形式，接收跨域接口响应回来的数据

```javascript
$.ajax({
    method: 'get',
    url: 'http://ajax.frontend.itheima.net:3006/api/jsonp',
    data: {
        name: 'zhang',
        age: 20
    },
    success: function (res) {
        console.log(res);
    }
})
```
## 2.3. 自己实现一个简单的JSONP
定义一个success回调函数
```html
<script>
    function success(data){
        console.log('JSONP响应回来的数据是：');
        console.log(data);
    }
</script>

<script src="http://ajax/frontend.itheima.net:3006/api/jsonp?callback=abc"></script>
```
## 2.4.JSONP的缺点
由于JSONP是通过&lt;script&gt;标签的src属性，来实现跨域数据获取的，所以，JSONP只支持get数据请求，不支持POST数据请求

注意：JSONP和Ajax之间没有任何关系，不能把JSONP请求数据的方式叫做Ajax，因为JSONP没有用到XMLHttpRequest这个对象

## 2.5. jQuery中的JSONP
jQuery提供的\$.ajax()函数，除了可以发起真正的Ajax请求之外，还能够发起JSONP数据请求
