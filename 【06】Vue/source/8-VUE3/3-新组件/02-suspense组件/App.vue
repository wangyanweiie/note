<template>
	<div class="app">
		<h5>APP组件</h5>
		<!----------------------------------------------------------
			Suspense内置组件 
			* 作用: 等待异步组件时渲染一些额外内容,让应用有更好的用户体验;
			* 套路: 包裹需要使用的组件,并且默认配置好了两个插槽;
				- <template v-slot:default>
				- <template v-slot:fallback>
		------------------------------------------------------------>
		<Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h5>Loading...</h5>
			</template>
		</Suspense>
	</div>
</template>

<script>
	//1.静态引入
	//import Child from './components/Child'

	//2.异步引入
	import {defineAsyncComponent} from 'vue' 
	const Child = defineAsyncComponent(()=>import('./components/Child')) 	

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