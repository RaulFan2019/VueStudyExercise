
//1. CommonJs的模块化规范
const {add, mul} = require('./js/mathUtils')

console.log(add(20,30))
console.log(mul(20,30))

//2.ES6的模块化规范
import {name, age, sex} from "./js/info";

console.log(name)
console.log(age)
console.log(sex)

//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件
require('./css/special.less')

//5.使用Vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

const app = new Vue({
  el: '#app',
  template:`<App/>`,
  components: {
    App
  }
})
