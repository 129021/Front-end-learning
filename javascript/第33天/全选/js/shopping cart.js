$(function () {
    // 1. 全选 全不选 功能模块
    // 就是把全选按钮（checkall）的状态赋值给三个小的按钮（j-checkbox)就好了
    // 事件可以使用change
    $('.checkall').change(function () {
        // console.log($(this).prop('checked'));
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'));
    })

    // 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选
    $('.j-checkbox').change(function () {
        // if (被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }

    })

    // 3. 增减商品数量模块 首先声明一个变量 当我们点击＋号（increment) 就让这个值＋＋ 然后赋值给文本框
    $('.increment').click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        // console.log(n);
        n++;
        $(this).siblings('.itxt').val(n);

        // 计算小计模块
        var p = $(this).parent().parent().siblings('.p-price').html();
        // console.log(p);
        p = p.substr(1);
        // console.log(p);

        $(this).parent().parent().siblings('.p-sum').html('￥' + p * n);

    })

    $('.decrement').click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        // console.log(n);
        if (n == 1) {
            return false;
        } else {
            n--;
            $(this).siblings('.itxt').val(n);

            var p = $(this).parent().parent().siblings('.p-price').html();
            // console.log(p);
            p = p.substr(1);
            // console.log(p);

            $(this).parent().parent().siblings('.p-sum').html('￥' + p * n);
        }
    })





})