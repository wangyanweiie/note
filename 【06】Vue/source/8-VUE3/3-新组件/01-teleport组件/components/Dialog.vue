<template>
	<div>
		<button @click="isShow = true">显示弹窗</button>
		<!--------------------------------------------
			teleport
			* 作用: 能够将我们组件的html结构移动到指定位置 
			* 语法: <teleport to="位置">..</teleport>
		---------------------------------------------->
		<teleport to="body">
			<div v-if="isShow" class="mask">
				<div class="dialog">
					<h5>我是一个弹窗</h5>
					<div>一些内容</div>
					<div>一些内容</div>
					<div>一些内容</div><br>
					<button @click="isShow = false">关闭弹窗</button>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'Dialog',
		setup(){
			let isShow = ref(false)
			return {isShow}
		}
	}
</script>

<style>
	/* 点击弹窗后显示的灰色遮罩层 */
	.mask{
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		background-color: rgba(0, 0, 0, 0.2);
	}
	.dialog{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		width: 300px;
		height: 200px;
		background-color: pink;
	}
</style>