# Github-了解开源相关的概念
## 1. 常见的5种开源许可协议
- BSD(Berkeley Software Distribution)
- Apache Licence 2.0
- **GPL**(GNU General Public Licence)
- LGPL(GNU Lesser General Public License)
- **MIT**(Massachusetts Institute of Technology,MIT)

GPL:具有传染性的一种开源协议，不允许修改后和衍生的代码作为闭源的商业软件和销售
使用GPL最著名的软件是Linux

MIT：是目前限制最少的一种协议，唯一的条件是：在修改之后的代码或者发行包中，必须包含原作者的许可信息
使用MIT的软件项目有：jQuery NOde.js

# Github-远程仓库的使用
## 1. 远程仓库的两种调用方式
Github 上的远程仓库，有两种访问方式，分别是 HTTPS和SSH。他们的区别是：
- HTTPS：零配置；但是每次访问仓库时，需要重复输入Github账号才能访问成功
- SSH：需要进行额外的配置，但是配置成功之后，每次访问仓库时，不需要重复输入Github的账号和密码

## 2. 基于HTTPS将本地仓库上传到Github
