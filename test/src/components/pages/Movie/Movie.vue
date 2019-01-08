<template>
	<div class="movie">
		<Header></Header>
		<div class="main">
			<ul>
				<!-- :class="sel===item?'hl':'' 绑定一个高亮的类名hl-->
				<!-- @click="selItem(item) 绑定一个点击事件selItem()-->
				<li @click="selItem(item)" :class="sel==item?'hl':''" v-for='(item,index) in nav' :key='index'>{{item}}</li>
			</ul>
			<div class="list-content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<div class="film-list" v-for='(item,index) in film' :key='index'>
					<img :src="item.poster.thumbnail" />
				</div>
			</div>
		</div>
		<back-top size='big'></back-top>  <!--size='':传参，如果传small,图标就变小，传big就变大，不传就处于中间大小-->
	</div>
</template>

<script>
	//无限滚动：每到底部就发起一个请求，请求接下来的数据，然后把数据拼接到原先的数据源下面
	import Vue from 'vue' //先引入vue，才能把InfiniteScroll挂载到vue中

	import Header from '../../commons/Header'
	import { Toast } from 'mint-ui'; //引入提示信息的插件

	import { InfiniteScroll } from 'mint-ui'; //引入无限滚动加载的插件
	Vue.use(InfiniteScroll); //在vue中使用插件

	export default {
		name: 'Movie',
		components: {
			Header
		},
		data() {
			return {
				name: 'Movie',
				nav: ['正在热映', '即将上映'],
				sel: '正在热映', //先默认绑定高亮类名的内容是'正在热映'  
				film: [],
				page: 1, //page默认情况下是1
				count: 7 //count是7
			}
		},
		methods: {
			loadMore() { //在loadMore方法中加载数据
				this.getData(); //触发getData()方法，但要对它做一些处理
			},
			selItem(item) { //创建一个点击的方法
				this.sel = item;
			},
			getData() {
				this.toast=Toast({  //每次发起请求时触发
					message: 'loading',
					iconClass: 'fa fa-spinner fa-spin' //添加一个图标,添加了fa-spin这个类名，图标就可以转起来
				});
				//				https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
				//              https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
				this.$axios.get('/api/v4/api/film/now-playing', {
						params: {
							page: this.page,
							count: this.count
						}
					})
					.then((res) => {
						this.film = this.film.concat(res.data.films); //要在这里拼接两个数组
//						Toast('请求ok'); //使用提示信息的插件，在数据请求成功的时候提示
						this.page++; //每次加载完后page++
						this.toast.close();  //每次加载完了就关掉
					})
					.catch((err) => {
						console.log(err);
						this.toast.close();  //加载失败也关掉
					})
			}
		},
		created() { //在created生命周期中调用函数
//			this.getData();
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../styles/main.less");
	.movie {
		.main {
			.padding(0,
			15,
			0,
			15);
			ul {
				.w(344);
				.h(45);
				.margin(50,
				0,
				0,
				0);
				border-bottom: 1px solid #fe6e00;
				li {
					.w(172);
					.h(42);
					.fs(16);
					.lh(45);
					float: left;
					text-align: center;
					color: #6a6a6a;
				}
				.hl {
					color: #fe6e00;
					border-bottom: 3px solid #fe6e00;
				}
			}
			.list-content {
				.film-list {
					.w(345);
					.h(125);
					.lh(125);
					border-bottom: 1px dashed #ccc;
					img {
						.w(60);
						.h(82);
					}
				}
			}
		}
	}
</style>