//vue2写法: import Vue from 'vue'
//不再引入Vue构造函数,引入的是名为creatApp的工厂函数;
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象,并挂载;
createApp(App).mount('#app')

//vue2写法
/**********************
new Vue({
	render: h => h(App),
}).$mount('#app') 
***********************/