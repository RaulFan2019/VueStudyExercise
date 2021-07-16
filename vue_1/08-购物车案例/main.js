const app = new Vue({
  el: '#app',
  data: {
    message: '购物车',
    books: [
      {id: 1, name: '算法导论', time: '2006-9', price: 86, num: 1},
      {id: 2, name: 'UNIX编程艺术', time: '2006-2', price: 36, num: 1},
      {id: 3, name: '编程珠玑', time: '2006-10', price: 66, num: 1},
      {id: 4, name: '代码大全', time: '2006-3', price: 126, num: 1}
    ]
  },
  computed: {
    totalPrice() {

      let totalPrice = 0
      //1. 普通的for循环方式
      // for (let i =0; i < this.books.length; i ++){
      //   totalPrice += this.books[i].price * this.books[i].num
      // }
      //2. for in 的方式
      // for (let i in this.books){
      //   totalPrice += this.books[i].price * this.books[i].num
      // }
      //3.for of 的方式
      // for (let item of this.books) {
      //   totalPrice += item.price * item.num
      // }
      //4.reduce 函数的作用，对数组中所有的内容进行汇总
      totalPrice = this.books.reduce(function (n1, book) {
        return n1 + book.price * book.num
      }, 0)
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  methods: {
    onAddClick(id) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id == id) {
          this.books[i].num++
          break
        }
      }
    },
    onSubClick(id) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id == id) {
          this.books[i].num--
          if (this.books[0].num < 1) {
            this.books[0].num = 1
          }
          break
        }
      }
    },
    onDeleteClick(id) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id == id) {
          this.books.splice(i, 1)
          break
        }
      }
    }
  }
})

//
// //编程范式： 命令式编程/声明式编程/函数式编程
// let nums = [101, 144, 156, 33, 15, 66]
//
// //filter
// let newNums = nums.filter(function (n) {
//   return n < 100
// })
//
// //map
// let newNums2 = nums.map(function (n) {
//   return n * 2
// })
//
// //计算数组内 小于100的值的乘2后的和
// let total = nums.filter(function (n){
//   return n < 100
// }).map(function (n){
//   return n * 2
// }).reduce(function (prev, n) {
//   return prev + n
// },0)
//
// let total = nums.filter(n => n<100).map(n => n*2).reduce((prev, n) => prev + n)