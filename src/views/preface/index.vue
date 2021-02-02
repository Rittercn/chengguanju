<template>
  <page-wrapper class="preface-container">
    <page-header></page-header>
    <div class="preface-wrapper">
        <div class="preface-box"></div>
        <div class="preface-content">
          dsfgdfokgdjflgdkjpfg
        </div>
        <div class="preface-btn-box">
          <router-link class="btn btn-image preface-btn" to="/mascot"></router-link>
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
.preface-container, .preface-wrapper, .preface-box, .preface-content, preface-btn {
	background-repeat: no-repeat;
	background-position: left top;
	background-size: 100% 100%;
}

.preface-container {
	background-image: url('./bg1.png'); 
}
.preface-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 35px;
  background-image: url('./bg2.png');
}
.preface-content {
  width: 316.017px;
  height: 457.875px;
  padding: 58px 16px;
  margin: 0 auto 0;
  overflow-x: hidden;
  overflow-x: auto;
  background-image: url('./content.png');
}
.preface-btn-box {
  margin-top: 30px;
  text-align: center;
}
.preface-btn {
  width: 170.163px;
  height: 46.953px;
  background-image: url('./btn.png');
}
</style>