<template>
	<div class="child">
		<h5>Child组件</h5>
		<Son/>
	</div>
</template>

<script>
	import Son from './Son'
	export default {
		name:'Child',
		components:{Son},
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>