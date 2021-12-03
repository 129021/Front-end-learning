## 安装
```
npm install itheima-tools-wjq
```

## 导入
```js
const itmeima=require('itheima-tools-wjq')
```

## 格式化时间
```js
// 调用dateFormat对时间进行格式化
const dtStr=itheima.dateFormat(new Date())

// 结果：2021-12-03 10:31:49
console.log(dtStr)
```

## 转义HTML中的特殊字符
```js
// 定义了带转换的HTML字符串
const htmlStr = '<h1 title="abc">This is h1 label<span>123&nbsp</span></h1>'

// 调用htmlEscape方法进行转换
const str = itheima.htmlEscape(htmlStr)

// 转换的结果：&lt;h1 title=&quot;abc&quot;&gt;This is h1 label&lt;span&gt;123&amp;nbsp&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原HTML中特殊字符
```js
// 待还原的HTML字符串
const str2 = itheima.htmlUnEscape(str)

// 输出的结果 ：<h1 title="abc">This is h1 label<span>123&nbsp</span></h1>
console.log(str2);
```

## 开源协议
ISC