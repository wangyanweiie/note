<template>
	<div class="child">
		<h5>Child组件</h5>
		{{sum}}
	</div>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'Child',
		//当进行异步引入并且用了Suspense时,setup可以是async函数;
		async setup(){
			let sum = ref(0)
			let p = new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve({sum})
				},2000)
			})
			return await p
		}
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>