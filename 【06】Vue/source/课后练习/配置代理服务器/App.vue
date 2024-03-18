<template>
	<div>
		<button @click="getStudents">学生信息</button>
		<button @click="getCars">汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'App',
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/students').then(
					response => {
						console.log('请求成功',response.data)
					},
					error => {
						console.log('请求失败',error.message)
					}
				)
			},
			getCars(){
				//请求前缀拼接在端口号的后面
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('请求成功',response.data)
					},
					error => {
						console.log('请求失败',error.message)
					}
				)
			}
		},
	}
</script>
