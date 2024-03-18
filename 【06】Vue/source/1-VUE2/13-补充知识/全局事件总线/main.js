import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false	//关闭Vue的生产提示

//方法一: 添加全局事件总线
//Vue.prototype.$bus = new Vue()

//声明vue实例
new Vue({
	el:'#app',
	render: h => h(App),
	//方法二: 添加全局事件总线,this就是当前的vue实例;
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})