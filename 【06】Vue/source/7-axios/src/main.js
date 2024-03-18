import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
//***********************基本使用***********************
//视频中的接口1(暂时不支持POST请求,支持跨域?callback=json)
axios({
  url: 'http://152.136.185.210:7878/api/m5/home/multidata',
  method: 'GET'
}).then(res => {
  console.log("基本使用: ",res);
})

//视频中的接口2(url参数通过?拼接,param专门针对GET请求的参数拼接)
axios({
  //url:'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1'
  url:'http://152.136.185.210:7878/api/m5/home/data',
  params:{
    type:'sell',
    page: 1
  }
}).then(res => {
  console.log("基本使用: ",res);
})

//***********************并发请求***********************
axios.all([
  axios({
    url: 'http://152.136.185.210:7878/api/m5/home/multidata'
  }),
  axios({
    url:'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=5'
  })
]).then(results => {
  console.log("并发请求: ",results);   //返回的两个对象封装在数组中输出
})
//或者直接使用axios.spread可将数组直接展开输出
/*.then(axios.spread((res1,res2) => {
  console.log("并发请求: ",res1),
  console.log("并发请求: ",res2)
}))*/

//*******************全局配置与全局的axios********************
//axios.defaults可以配置全局参数: baseURL/timeout超时时间/请求头...
axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5';
axios.defaults.timeout = 2000;
axios.all([
  axios({
    url:'/home/multidata',
  }),
  axios({
    url:'/home/data',
    params:{
      type:'sell',
      page: 1
    }
  })
]).then(results => {
  console.log("全局配置: ",results);
})

/***********************声明axios实例***********************
调用axios.create可以创建axios的实例对象,在每个实例中有自己独立的配置;
应用: 当不同的服务器url路径不一致时,可以声明多个实例分别对应不同的服务器
*/
//创建实例对象1
const instance1 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 5000
})
instance1({
  url: '/home/multidata'
}).then(res => {
  console.log("实例: ",res);
})
instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 5
  }
}).then(res => {
  console.log("实例: ",res);
})

/*创建实例对象2
const instance2 = axios.create({
  baseURL: 'http://xxx.xxx.xxx.xxx',
  timeout: 10000;
  headers:{}
})
instance2({}).then
instance2({}).then
*/
/***********************模块封装***********************
//引入request模块
import {request1} from "./network/request";
import {request2} from "./network/request";
import {request3} from "./network/request";
import {request4} from "./network/request";

//获取返回的结果进行处理
//方式1:----------------------
request1({url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})
//方式2:----------------------
request2({
  baseConfig: {
    url: '/home/multidata'
  },
  success: function (res) {
    console.log(res);
  },
  failure: function (err) {
    console.log(err);
  }
})
//方式3:-----------------------
request3({url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
//方式4:-----------------------
request4({url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
*/
//*********************封装+拦截器*********************
import {request5} from "./network/request";
request5({url: '/home/multidata'
}).then(res => {
  console.log("正确拦截器: ",res);
}).catch(err => {
  console.log("错误拦截器: ",err);
})
