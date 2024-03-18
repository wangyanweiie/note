<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- animate.css的配置: name与需要的进入离开的动画名 -->
		<transition-group appear
											name="animate__animated animate__bounce"
											enter-active-class="animate__swing"
											leave-active-class="animate__backOutUp">
			<h1 v-show="!isShow" key="1">你好阿！</h1>
			<h1 v-show="isShow" key="2">哈哈哈！</h1>
		</transition-group>
	</div>
</template>

<script>
	//引入安装的animate.css动画样式库(npm install animate.css --save)
	import 'animate.css'
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		}
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
</style>