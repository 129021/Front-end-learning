# 2. 品优购首页制作
## 2.6. main主题模块制作
main盒子宽度为980像素，位置距离左边220px(margin-left)，给高度就不用清除浮动

main盒子里面包含左侧盒子，左浮动，focus焦点图

main盒子里面包含右侧黑子，右浮动，newsflash新闻快报模块

### newsflash新闻快报模块
- 1号盒子为news新闻模块 高度为165px
- 2号模块为lifeservice生活服务模块 高度为209px
- 3号盒子为bargain特价商品

注意：
这里分为上下两个模块，但是两个模块都用div
1号盒子news-hd新闻头部模块，给一个高度和下边框
2号盒子news-bd新闻主体部分，里面包含ul和li还有链接



## 2.7. 楼层区floor制作
注意这个floor，不要给高度，内容有多少，算多少

第一楼是家用电器模块：里面包含两个盒子:
- 1号盒子box-hd，给一个高度，有个下边框，里面非农为左右两个盒子
- 2号盒子box-bd，不要给高度

Tab栏原理-布局需求



# 3. 品优购列表页制作
## 3.1. 品优购列表页制作准备工作
列表页面是新的页面，需要新建页面list.html

因为列表页的头部和底部基本一致，所以我们需要吧首页中的头部和底部的结构复制过来

头部和底部的样式也需要，因此list.html中还需要引入common.css

需要新的list.css样式文件，这是列表页专门的样式文件


## 3.2. 列表页header和nav修改

秒杀盒子sk(secong kill)定位即可

1号盒子左侧浮动sk_list里面包含ul和li
2号盒子左侧浮动sk_con里面包含ul和li


## 3.3. 列表页主体 sk_container

- 1号盒子sk_container给宽度1200，不要给高度
- 2号盒子sk_hd，插入图片即可
- 3号盒子sk_bd，里面包含很多的ul和li



# 4. 品优购注册页制作
## 4.1. 注册页类名命名

注册页面：rgister.html

注意：注册页面比较隐私，为了保护用户信息，我们不需要对注册页进行SEO优化


## 4.2. 注册页布局


## 4.3. registerareaa布局


# 5. web服务器
## 5.1. 什么是web服务器
服务器（我们也会称之为主机）是提供计算服务的设备，他也是一台计算机。在网络环境下，根据服务器提供的服务类型不同，服务器又可分为**文件服务器、数据库服务器、应用程序服务器、web服务器**

web服务器一般指**网站服务器**，是指驻留于因特网上某种类型的计算机程序，可以向浏览器等web客户端提供文档，亦可以放置网站文件，让全世界浏览，可以放置数据文件，让全世界下载

根据服务器在网络中的位置不同，又可分为**本地服务器和远程服务器**



## 5.2. 本地服务器
我们可以把自己的电脑设置为本地服务器这样同一个局域网内的人就可以访问自己的网站了，ajax实现


## 5.3. 远程服务器
本地服务器主要在局域网中访问，如果想要在互联网中访问，可以把网站放在远程服务器

远程服务器指别的公司为我们提供一台电脑（主机），我们只需要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了

## 5.4. 将自己的网站上传到远程服务器
注意：一般稳定的服务器都是要收费的。比如：阿里云

免费的服务器(免费空间）：http://free.3v.do/

步骤：
- 去免费空间网站注册账号
- 记录下主机名、用户名、密码、域名
http://spongebob01.3vfree.com
- 利用cutftp软件上传网站到远程服务器
- 在浏览器中输入域名，即可访问自己的网站了



