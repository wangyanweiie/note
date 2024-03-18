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
document.writeln('<h2>你是年少的欢喜!</h2>')


//使用Vue进行开发:导入vue以及App.vue文件
import Vue from 'vue'
//import App from './js/App.js'
import App from './vue/App.vue'

/*****************************************
先从vue实例中初步抽取; 优化: 抽取到App.js中;
******************************************
  const App = {
  template:  `
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
  </div>`,
  data() {
    return {
      message: 'Hello Webpack',
      name: 'coderwhy'
    }
  },
  methods: {
    btnClick(){
      alert("你点击我！")
    }
  }
}******************************************/
new Vue({
  el: '#app',
  //注册App组件
  components: { App },
  //使用App组件
  template: '<App/>'
})
