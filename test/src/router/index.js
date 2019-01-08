import Vue from 'vue' //引入实例
import Router from 'vue-router'  //引入路由

import Home from '../components/pages/Home/Home.vue'  //引入某一个组件
import Movie from '../components/pages/Movie/Movie.vue'

Vue.use(Router)  //使用路由

export default new Router({
	routes:[
	{
		path:'/',  //匹配的hash地址
		name:'Home',  //路由的名字
		component:Home  //该路由所引用的组件
	},
	{
		path:'/movie',  //匹配的hash地址
		name:'Movie',  //路由的名字
		component:Movie  //该路由所引用的组件
	}
	]
})
