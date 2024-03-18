<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">把学生名给School组件</button>
	</div>
</template>

<script>
	//引入安装的第三方库
	import pubsub from 'pubsub-js'
	export default {
		name:'Student',
		data() {
			return {
				name:'小明',
				sex:'男',
			}
		},
		methods: {
			sendStudentName(){
				pubsub.publish('hello',666)
			}
		},
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
