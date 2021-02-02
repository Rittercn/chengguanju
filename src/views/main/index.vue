<template>
  <page-wrapper class="main-container">
    <page-header></page-header>
    <div class="main-container">
       <div class="main-box"></div>
       <div class="main-btn-box">
          <div class="main-title"></div>
          <router-link class="main-btn" to="/preface"></router-link>
       </div>
    </div>
  </page-wrapper>
</template>

<script>
export default {
  name: 'Index',
}
</script>
<style lang="less">
.main-container, .main-box, .main-btn, .main-title {
	background-repeat: no-repeat;
	background-position: left top;
	background-size: 100% 100%;
}
.main-container, .main-box {
	width: 100%;
    height: 100%;
}
.main-container {
	background-image: url('./bg1.png'); 
}
.main-box {
	background-image: url('./bg2.png');
	background-position: left top;
}
.main-btn-box {
	position: absolute;
	top: 270px;
    width: 100%;
	z-index: 9;
	text-align: center;
}
.main-title {
    display: inline-block;
    width: 307.359px;
    height: 166.167px;
	background-image: url('./title.png');
}
.main-btn {
    display: inline-block;
	width: 302.031px;
	height: 47.619px;
	margin-top: 50px;
	background-image: url('./btn.png');
}
</style>