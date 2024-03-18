<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- 
			使用transition包裹需要添加动画的组件
			:appear="true" 设置页面一加载就执行动画效果
		-->
		<transition name="hello" appear>
			<h1 v-show="isShow">Helloworld！</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	/*进入触发动画命名*/
	.hello-enter-active{		
		animation: atguigu 0.5s linear;
	}
	/*离开触发动画命名: 进入动画的反效果*/
	.hello-leave-active{
		animation: atguigu 0.5s linear reverse;
	}
	/*动画效果*/
	@keyframes atguigu {
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>