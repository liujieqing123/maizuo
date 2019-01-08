//抛出组件

//引入组件
import BackTop from './components/BackTop.vue'

let scrollEvent = function(distance,vnode) {
	let bodyDistance = document.documentElement.scrollTop; //获取滚动条到document顶部的距离
	//根据距离修改显示和隐藏
	if(bodyDistance >= distance) {
		if(vnode.context.isShow == false) { //如果是false才改值，如果原本是true就不改
			vnode.context.isShow = true;
		}
	} else {
		if(vnode.context.isShow) { //如果是true才改值，如果原本是false就不改
			vnode.context.isShow = false;
		}
	}
}

export default {
	install(Vue) { //传一个Vue参数
		console.log('hahh')
		Vue.component('back-top', BackTop) //挂载组件
		Vue.directive('scroll-hide', {
			bind(el, binding, vnode) {
				console.log(el); //自定义指令绑定的节点
				console.log(binding); //绑定对象
				console.log(vnode); //虚拟dom,可以从虚拟dom中拿到isShow的数据
				let distance = el.getAttribute('scroll-hide-distance'); //获取之前规定的阈值
				window.addEventListener('scroll',scrollEvent(distance,vnode))
			},
			unbind(el, binding, vnode) {

			}
		})
	}
}