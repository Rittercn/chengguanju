<template>
  <div class="page-header" :class="{ 'page-fixed-header': isFixed }">
    <img src="../assets/header.png" class="logo" alt="" />
    <img src="../assets/home.png" @click="gotohome"  class="gotohome" alt="">
    <!-- <router-link to="/" class="home">
    </router-link> -->

  </div>
</template>

<script>
export default {
  name: 'page-header',
  props: {
    isFixed: {
       type: Boolean,
       default: false
    }
  },
  methods: {
    gotohome(){
      this.$router.push('/')
    },
   
  }
}
</script>

<style lang="less">
.page-header, .home {
	background-repeat: no-repeat;
	background-position: left top;
}
.page-header {
    position: relative;
    width: 100%;
    height: 36.33297px;
}
.page-fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 17.982px;
}
.logo {
    width: 100%;
	height: 36.33297px;
}
.gotohome{
  position: absolute;
  right:10px;
  top:5px;
  width: 23px;
}
</style>
