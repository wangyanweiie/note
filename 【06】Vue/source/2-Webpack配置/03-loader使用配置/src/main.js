//使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')
console.log(add(20, 30));
console.log(mul(20, 30));

//使用ES6的模块化的规范
import {name, age, height} from "./js/info";
console.log(name);
console.log(age);
console.log(height);

//依赖css文件
require('./css/normal.css')

//依赖less文件
require('./css/special.less')

//在页面输出文字
document.writeln('<h2>你是年少的欢喜!</h2>')

