<template>
	<div class="list">
		<ul>
			<li v-for='(item,index) in list' :key='index'>
				<img :src="item.cover.origin" />
				<div class="info-left">
					<div class="name">毒液：致命守护者</div>
					<div class="num">
						<span>152</span>
						<span>家影院上映</span>
						<span>0</span>
						<span>人购票</span>
					</div>
				</div>
				<div class="info-right">
					<span class="pf">8.4</span>
				</div>
			</li>
		</ul>
		<div class="more">
			<span>{{name}}</span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		name: 'List',
		components: {},
		props:['url','name'],
		data() {
			return {
				
				list: []
			}
		},
		methods: {
			//			https://m.maizuo.com/v4/api/film/now-playing?__t=1542074140030&page=1&count=5
			getlist() {
				this.$axios.get('/api/v4/api/film/'+this.url, {
						params: {
							__t: Date.now(),
							page: 1,
							count: 5
						}
					})
					.then((res) => {
						this.list = res.data.films

					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		mounted() {

		},
		created() {
			this.getlist();
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	.list {
		.w(375);
		background: #eee;
		text-align: center;
		ul {
			.w(355);
			.padding(0,
			0,
			0,
			20);
			background: #eee;
			li {
				.w(341);
				.h(241);
				.margin(20,
				0,
				0,
				0);
				background: #fff;
				img {
					.w(341);
					.h(191);
				}
				.info-left {
					.w(290);
					.h(40);
					.padding(10,0,0,10);
					float:left;
					/*background:green;*/
					.name {
						.w(281);
						.h(17);
						.fs(12);
						/*background: red;*/
						text-align:start;
					}
					.num {
						.w(281);
						.h(17);
						.fs(12);
						color: #9a9a9a;
						/*background: blue;*/
						text-align:start;
					}
				}
				.info-right {
					.w(41);
					.h(50);
					.lh(30);
					float:right;
					/*background:blue;*/
					text-align:start;
					.pf {
						.fs(19);
						color: #f78360;
					}
				}
			}
		}
		.more{
			.w(375);
			.h(45);	
			span{
				display:block;
				.w(160);
				.h(30);
				.fs(15);
				.lh(30);
				color:#666;
				border:1px solid #666;
				border-radius:20px;
				.margin(20,0,0,100)
			}
		}
	}
</style>