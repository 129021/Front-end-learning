$(function () {
    // 当我们点击了li 此时不需要执行页面滚动事件里面的li的背景选择 添加current
    // 节流阀 互斥锁
    var flag = true;

    // alert(111);
    var toolTop = $('.recommend').offset().top;

    toogleTool();

    function toogleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        };
    }
    $(window).scroll(function () {
        toogleTool();

        // 页面滚动到某个内容区域，左侧的电梯导航li相应添加和删除current类名
        if (flag) {
            $('.floor .w').each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    // console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }

    })

    // 点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function () {
        flag=false;
        // console.log($(this).index());
        // 当我们每次点击li就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子 计算它的offset().top
        var current = $('.floor .w').eq($(this).index()).offset().top;

        // 页面动画滚动效果
        $('body,html').stop().animate({
            scrollTop: current
        },function(){
            flag=true;
        });

        // 点击之后让当前的li 添加current类名 兄弟姐妹移除current类名
        $(this).addClass('current').siblings().removeClass()
    })
})