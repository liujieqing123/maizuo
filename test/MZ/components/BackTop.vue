<template>
	<!--v-backtop-hide 通过一个自定义指令来监听页面滚动事件 （查看vue.js 文档的自定义指令部分-->
	<div class="back-top" 
		v-scroll-hide='isShow'
		scroll-hide-distance='300'
		v-show='isShow'
		>
		<div class="content">
			<i class="fa fa-arrow-up"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'back-top',
		data(){
			return{
				isShow:false
			}
		}
	}
</script>

<style lang="less" scoped>
	/*在这里不能引用之前写的 _mixin.less和 _vartical.less文件,需要再写一套*/
	
	.back-top {
		position: fixed;
		right: 20px;
		bottom: 20px;
		.content {
			width: 60px;
			height: 60px;
			font-size: 25px;
			background: #ccc;
			border: 1px solid #ccc;
			border-radius: 15px;
			color: #FFFFFF;
			text-align: center;
			line-height: 55px;
		}
		&[size='small'] {
			.content {
				width: 40px;
				height: 40px;
				font-size: 15px;
				line-height: 40px;
			}
		}
		&[size='big'] {
			.content {
				width: 70px;
				height: 70px;
				font-size: 30px;
				line-height: 70px;
			}
		}
	}
</style>