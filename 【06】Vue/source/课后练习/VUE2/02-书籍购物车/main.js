const app = new Vue({
  el: '#app',
  data: {
    books: [
      {id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, count: 1},
      {id: 2, name: '《编程艺术》', date: '2006-2', price: 59.00, count: 1},
      {id: 3, name: '《编程珠玑》', date: '2008-1', price: 39.00, count: 1},
      {id: 4, name: '《代码大全》', date: '2006-3', price: 98.00, count: 1},
    ]
  },
  methods: {
    /*getFinalPrice(price) {
      return '¥' + price.toFixed(2)
    }*/
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      if(confirm("确定要删除吗？")){
        this.books.splice(index, 1)
      }
    }
  },
  computed: {
    totalPrice() {
      //**********for in***********
      /*let totalPrice = 0
      for (let i in this.books) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice*/

      //***********for of**********
      /*let totalPrice = 0
      for (let item of this.books) {
        totalPrice += item.price * item.count
      }
      return totalPrice*/

      //****************高阶函数：reduce****************
      return this.books.reduce(function(preValue,book){
        return preValue + book.price * book.count;
      }, 0)
    }
  },
  //设置过滤器
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})





