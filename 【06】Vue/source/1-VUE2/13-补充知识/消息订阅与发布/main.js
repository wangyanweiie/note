import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//声明vue实例
new Vue({
	el:'#app',
	render: h => h(App),
})