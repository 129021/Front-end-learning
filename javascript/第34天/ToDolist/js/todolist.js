$(function () {
    load();
    // alert(11);
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            // alert(111);
            // 1. 先读取本地存储原来的数据
            var local = getDate();
            // console.log(local);

            // 把local数组进行更新数据 把最新的数据追加给local数组
            local.push({
                title: $(this).val(),
                done: false
            });

            // 把更新过的local数组存储给本地数组
            saveDate(local);


            // 2. todolist 本地存储的数据渲染加载到页面
            load();


        }
    })

    // 读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    };

    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    };

    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getDate();
        // console.log(data);

        // 遍历之前先要清空ol元素里面的内容
        $('ol').empty();
        
        // 遍历数据
        $.each(data, function (i, n) {
            // console.log(n);
            $('ol').prepend('<li><input type="checkbox"><p>'+n.title+'</p><a href="javascript:;"></a></li>')
        })
    }

})