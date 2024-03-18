import Vue from 'vue'
import App from './App'
import store from './store/index'
Vue.config.productionTip = false  //关闭生产提示

new Vue({
  el: '#app',
  store: store,   //在vue实例上挂载store对象
  render: h => h(App)
})
