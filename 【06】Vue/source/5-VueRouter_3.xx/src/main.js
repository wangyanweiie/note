import Vue from 'vue'
import App from './App'               //App组件作为入口文件
import router from './router/index'   //导入router即index文件路径

Vue.config.productionTip = false

new Vue({
  el: '#app',           //挂载vue实例
  router,               //挂载router实例
  render: h => h(App)   //渲染App组件替换el
})
