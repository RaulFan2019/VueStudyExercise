//1. CommonJs的模块化规范
const {add, mul} = require('./mathUtils')

console.log(add(20,30))
console.log(mul(20,30))

//2.ES6的模块化规范
import {name, age, sex} from "./info";

console.log(name)
console.log(age)
console.log(sex)