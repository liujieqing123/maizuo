<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/pages/Home/Home'


export default {
  name: 'App',  //本页面的名字
  components: {   //放要插入的组件
    Home
  }
}
</script>

<style>

</style>
