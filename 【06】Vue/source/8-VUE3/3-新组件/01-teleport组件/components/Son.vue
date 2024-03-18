<template>
	<div class="son">
		<h5>Son组件</h5>
		<Dialog/>
	</div>
</template>

<script>
	import Dialog from './Dialog.vue'
	export default {
		name:'Son',
		components:{Dialog}		//弹窗组件
	}
</script>

<style>
	.son{
		background-color: orange;
		padding: 10px;
	}
</style>