<template>
	<div class="app">
		<h5>App组件</h5>
		<Child/>
	</div>
</template>

<script>
	import Child from './components/Child'
	export default {
		name:'App',
		components:{Child},
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>