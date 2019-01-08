// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//ES6引入vue模块
import Vue from 'vue'

//引入自研ui框架
import MZ from '../MZ'
//使用ui框架
Vue.use(MZ)  //调用模块里的install方法，并且将vue实例进行传递


//引入APP组件
import App from './App'

//引入axios
import Axios from 'axios'

//引入路由
import router from './router/index.js'

//把axios挂载到vue实例上
Vue.prototype.$axios=Axios

//请求拦截
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //挂载路由
  components: { App },  //挂载APP
  template: '<App/>'   //这个写法相当于<APP></APP>,用app组件来替换掉首页的div元素
})
