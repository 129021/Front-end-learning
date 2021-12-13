## 8.3. 计算属性的setter和getter
每个计算属性 都包含一个setter和一个getter
一般情况下，只用到getter来读取，在某些情况下，也可以提供一个setter方法（不常用）

```js
    <div id="app">
        <h2>{{fullName}}</h2>
    </div>

    <script src="../js/vue.js"></script>

    <script>
        const app = new Vue({
            el: '#app',
            data: {
                firstName: 'Jianqin',
                lastName: 'Wang',
            },
            methods: {},
            computed: {

                // 计算属性一般是没有set方法，只读属性
                fullName: {
                    set: function () {

                    },
                    get: function () {
                        return this.firstName+' '+this.lastName
                    }
                }

            }
        });
    </script>
```
## 8.4. 计算属性的缓存

计算属性相对于methods的优势是：
- 让代码变得简洁
- 提高性能,计算属性会进行缓存，如果多次使用时，计算属性只会调用一次

```js
    <div id="app">
        <!-- 1. 直接拼接 -->
        <h2>{{firstName}} {{lastName}}</h2>

        <!-- 2. 通过定义methods -->
        <h2>{{getFullName()}}</h2>

        <!-- 3. 通过computed -->
        <h2>{{fullName}}</h2>
    </div>

    <script src="../js/vue.js"></script>

    <script>
        const app = new Vue({
            el: '#app',
            data: {
                firstName: 'Jianqin',
                lastName: 'Wang',
            },
            methods: {
                getFullName: function () {
                    return this.firstName + ' ' + this.lastName
                }
            },
            computed: {
                fullName: function () {
                    return this.firstName + ' ' + this.lastName
                }
            }
        });
    </script>
```
# 9. ES6知识补充
