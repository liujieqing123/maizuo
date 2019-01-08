<template>
	<div class="header">
		<div class="total">
			<div class="left-icon">
				<i class="fa fa-bars"></i>
			</div>		
			<router-link class="title" to="/movie">
				卖座电影
			</router-link>
			<div class="user">
				<i class="fa fa-user-o"></i>
			</div>
			<div class="path">
				<span>广州</span>
				<i class="fa fa-angle-down"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		components: {}

	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	.header {
		.total {
			.w(375);
			.h(50);
			position:fixed;
			left:0;
			top:0;
			right:0;
			overflow:hidden;
			z-index:500;
			background: black;
			.left-icon {
				.w(50);
				.h(50);
				.lh(35);
				text-align: center;
				float: left;
				i {
					.fs(15);
					color: #fff;
				}
			}
			.title {
				.w(100);
				.h(50);
				.fs(15);
				.lh(50);
				color: #fff;
				float: left;
				text-align: center;
			}
			.path {
				.w(70);
				.h(50);
				.fs(15);
				.lh(50);
				float: right;
				color: #fff;
				text-align: center;
			}
			.user {
				.w(50);
				.h(50);
				.fs(15);
				.lh(50);
				float: right;
				color: #fff;
				text-align: center;
			}
		}
	}
</style>