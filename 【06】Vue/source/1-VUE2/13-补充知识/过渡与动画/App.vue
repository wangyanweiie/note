<template>
	<div>
		<Test1/>
		<Test2/>
		<Test3/>
	</div>
</template>

<script>
// 过渡与动画
/***********************************************************
1.作用：在插入更新或移除DOM元素时,在合适的时候给元素添加样式类名;
2.语法：
（1）准备样式 (v可以换成对应的name)
		元素进入的样式：
			* .v-enter：				进入的起点
			* .v-enter-active：进入过程中
			* .v-enter-to：		进入的终点
		元素离开的样式：
			* .v-leave：				离开的起点
			* .v-leave-active：离开过程中
			* .v-leave-to：		离开的终点

（2）使用<transition>包裹要过渡的元素,
		并且需要使用多个动画时可以配置name属性：配置name属性之后需要使用.name-替换.v-;
		<transition name="hello">
			<h1 v-show="isShow">Hello！</h1>
		</transition>

（3）注意：若有多个元素需要过渡则需要使用：<transition-group>,且每个元素都要指定key值;
3.动画样式第三方库: animate.css
**************************************************************************/
</script>

<script>
	import Test1 from './components/Test1'
	import Test2 from './components/Test2'
	import Test3 from './components/Test3'

	export default {
		name:'App',
		components:{Test1,Test2,Test3},
	}
</script>
