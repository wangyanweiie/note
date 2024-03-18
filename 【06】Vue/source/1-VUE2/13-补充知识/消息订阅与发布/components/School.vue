<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	//引入安装的第三方库(npm i pubsub-js)
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			//组件挂载完毕立即订阅消息,参数(发布的消息,回调函数(消息名,传递的数据));
			//写在一起时回调函数必须是箭头函数,或者是现在methods中定义回调函数,直接在mounted中使用;
			this.pubId = pubsub.subscribe('hello',(messageName,data)=>{
				console.log('有人发布了hello消息,hello消息的回调执行了', messageName,data)
				//console.log(this)
			})
		},
		beforeDestroy() {		//取消订阅
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>