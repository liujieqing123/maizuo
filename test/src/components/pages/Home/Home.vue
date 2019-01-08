<template>
	<div class="home">
		<Header></Header>
		<Banner></Banner>
		<List v-for='item in list' :url='item.url' :name='item.name'></List>
	</div>
</template>

<script>
import Header from '../../commons/Header.vue'  //引入组件
import Banner from '../../commons/Banner.vue'
import List from '../../commons/List.vue'

	export default{
		name:'Home',   //本页面的名字
		components:{   //放要插入的组件
			Header,Banner,List
		},
//		https://m.maizuo.com/v4/api/film/now-playing?__t=1542074140030&page=1&count=5
//		https://m.maizuo.com/v4/api/film/coming-soon?__t=1542109614640&page=1&count=3
		data(){
			return{
				list:[{url:'now-playing',name:'更多热映电影'},{url:'coming-soon',name:'更多即将上映电影'}]
			}
		}
	}
</script>

<!--lang="less":表示这一块要通过less来解析
	scoped：表示把下面这堆代码形成一个作用域，表示这堆代码只对这个组件有用，
	对其他组件没有用，防止类名变量名冲突
-->
<style lang="less" scoped>
/*正确引入*/
@import url("../../../styles/main.less");   
/*错误引入*/
/*@import'../../styles/common/_vartical.less';*/ 
   .home{
   	background:#eee;
   }
</style>

<!--这是个页面组件，要往APP根组件里引-->

