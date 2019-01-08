<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for='(item,index) in list' :key='index'>
					<img :src="item.imageUrl" />
				</div>
			</div>
			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'; //引入swiper文件
	import Vue from 'vue';

	export default {
		name: 'Banner',
		components: {},
		data() {
			return {
				name: 'Banner',
				list: []
			}
		},
		methods: {
			//			https://m.maizuo.com/v4/api/billboard/home?__t=1542074140023
			getList() {
				this.$axios.get('/api/v4/api/billboard/home', {
						params: {
							__t: 1542074140023
						}
					})
					.then((res) => {
						console.log(res.data)
						this.list = res.data.billboards;
						Vue.nextTick(() => {
							this.mySwiper = new Swiper('.swiper-container', {
								loop: true,
								scrollbar: {
									el: '.swiper-scrollbar',
								},
							});
						})
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getList();
		},
		destroyed() {
			this.mySwiper = null;
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	@import url("../../../node_modules/swiper/dist/css/swiper.css");
	/*引入swiper文件中的css文件*/
	
	.banner {
		.margin(50,0,0,0);
		.w(375);
		.h(210);
		.swiper-slide {
			.w(375);
			.h(210);
			img {
				.w(375);
				.h(210);
			}
		}
	}
</style>