import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false; //关闭 Vue 的生产提示

// 方法一: 添加全局事件总线
// Vue.prototype.$bus = new Vue()

// 声明 vue 实例
new Vue({
  el: "#app",
  render: (h) => h(App),
  // 方法二: 添加全局事件总线, this 就是当前的 vue 实例;
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
