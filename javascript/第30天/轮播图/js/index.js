window.addEventListener('load', function () {
    // this.alert(1);
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;


    // 2. 左右按钮 
    // 鼠标经过focus就显示左右按钮   清除定时器
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    })

    // 鼠标离开focus就隐藏左右按钮   开启定时器
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            arrow_r.click();
        }, 2000);

    })

    // 3. 动态生成小圆圈 有几张图片 就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个li
        var li = this.document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性
        li.setAttribute('index', i);
        // 把li插入到ol里面
        ol.appendChild(li);

        // 4.小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 干掉所有人  把所有li清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的li设置current类名
            this.className = 'current';

            // 5. 点击小圆圈移动图片 当然移动的是ul
            // ul 的移动距离就是小圆圈的索引号 乘以图片的宽度 注意是负值
            // 当我们点击了某个li就拿到当前li的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个li就要把这个li的索引号给num
            num = index;
            // 当我们点击了某个li 就要把这个li的索引号给circle
            circle = index;
            // console.log(focusWidth);
            // console.log(index);
            animate(ul, -index * focusWidth)

        })
    }


    // 把ol里面的第一个li设置类名为current
    ol.children[0].className = 'current';

    // 6. 克隆第一张图片，放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 7. 点击右侧按钮，图片滚动一张
    var num = 0;
    // circle控制小圆圈的播放
    var circle = 0;

    // flag节流阀
    var flag = true;


    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false; //关闭节流阀
            // 如果走到了最后复制的一张图片，此时我们的ul要快速复原left改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth,function(){
                flag=true;   //打开节流阀
            });
            // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果我们circle==4，说明走到最后我们克隆的这张图片了  我们就复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 先清除其余小圆圈的current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下当前的current类名
            ol.children[circle].className = 'current';
        }
    })

    // 9. 左侧按钮做法
    arrow_l.addEventListener('click', function () {
        if (flag){
            flag=false;
            // 如果走到了最后复制的一张图片，此时我们的ul要快速复原left改为0
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';

        }
        num--;
        animate(ul, -num * focusWidth,function(){
            flag=true;
        });
        // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
        circle--;
        // 如果我们circle<0，说明第一张图片  则小圆圈改为第4个小圆圈（3）
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的current类名
        ol.children[circle].className = 'current';

        }
        
    })

    // 10.自动播放轮播图
    var timer = this.setInterval(function () {
        // 手动调用点击事件
        arrow_r.click();
    }, 2000);



})