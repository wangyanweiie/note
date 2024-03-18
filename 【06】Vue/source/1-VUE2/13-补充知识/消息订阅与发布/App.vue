<template>
	<div class="app">
		<h1>{{message}}</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
/*****************************************
1.作用; 组件间通信的方式,适用于任意组件间通信;
2.使用流程：
（1）安装pubsub：npm i pubsub-js
（2）引入: import pubsub from 'pubsub-js'
（3）发布消息：pubsub.publish('xxxx',data)
（4）订阅消息：A组件想接收数据则在A组件中订阅消息,订阅的回调留在A组件自身;
		若不写事先在methods中定义好方法作为回调,回调函数需要写成箭头函数的形式;
		mounted() {
			this.pid = pubsub.subscribe('xxxx',()=>{}) 
		}
（5）注意: 最好在beforeDestroy钩子中,用PubSub.unsubscribe(pid)去取消订阅;
***********************************************************************/
</script>
<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				message:'你好阿！',
			}
		}
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
