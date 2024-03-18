<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
				studentName: ''
			}
		},
		mounted() {
			this.$bus.$on('hello',(name)=>{
				this.studentName = name;
				console.log('我是School组件,收到了数据',this.studentName)
			})
		},
		beforeDestroy() {					//销毁前需要解绑事件
			this.$bus.$off('hello')
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>