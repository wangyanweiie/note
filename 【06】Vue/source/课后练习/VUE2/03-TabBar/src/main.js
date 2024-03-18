import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  //挂载路由实例
  router,
  render: h => h(App)
})
