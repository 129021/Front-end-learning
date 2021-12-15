const app = new Vue({
    el: '#app',
    data: {
        list: [{
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2)
        // }

        increment(index) {
            // console.log('increment',index);
            this.list[index].count++
        },
        decrement(index) {
            // console.log('decrement');
            this.list[index].count--
        },

        removeHandler(index) {
            this.list.splice(index, 1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0
            for (let i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price * this.list[i].count
            }
            return totalPrice
        }
    }
})