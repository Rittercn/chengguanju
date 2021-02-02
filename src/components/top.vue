<template>
  <div>
      <div class="topview">
          <img class="top" src="../img/top.png">
          <div class="right">
              <!-- <img src="../img/share.png"> -->
              <img src="../img/home.png">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.topview{
  background: #0060FF;
  height: calc(7vh);
  width: 100%;
  .top{
    height: 25px;
    width: 200px;
    margin:10px 0 0 20px;
    float: left;
  }
  .right{
    float: right;
    margin-right:10px;
    margin-top: 10px;
    img{
      width: 25px;
      height: 25px;
      float: right;
      margin-left:1rem;
    }
  }
}
</style>
