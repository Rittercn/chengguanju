<template>
  <div class="home">
      <!-- <div v-if="dashijian == 1" class="da1">
        <img class="dashijian" src="../img/da1.jpg">
        <div class="right" @click="dashijian = 2"></div>
        <div class="left" @click="fanhui"></div>
      </div> -->
      <!-- <div v-if="dashijian == 2" class="da2">
        <img class="dashijian" src="../img/da2.jpg">
        <div class="right" @click="dashijian = 3"></div>
        <div class="left" @click="dashijian = 2"></div>
      </div>
      <div v-if="dashijian == 3" class="da3">
        <img class="dashijian" src="../img/da3.jpg">
        <div class="right" @click="dashijian = 4"></div>
        <div class="left" @click="dashijian = 2"></div>
      </div>
      <div v-if="dashijian == 4" class="da4">
        <img class="dashijian" src="../img/da4.jpg">
        <div class="right" @click="gotorongyu()"></div>
        <div class="left" @click="dashijian = 3"></div>
      </div> -->
      <top/>
      <div class="content">
          <div class="title">
              <img src="../img/content1.png" alt="">
          </div>
          <div class="fuwenben">
              <img src="../img/content2.png" alt="">
          </div>
          <div class="next">
              <div class="nextbutton"></div>
          </div>
      </div>

      <bottom1/>
  </div>
</template>

<script>
import top from '@/components/top.vue'
import bottom1 from '@/components/bottom1.vue'
export default {
  components:{
   top,
   bottom1
  },
  data () {
    return {
      dashijian:1,
    }
  },
  computed:{
    
  },
  mounted () {
    
  },
  methods: {
    fanhui(){
        this.$router.go(-1);
    },
    gotorongyu(){
        this.$router.push('/honor')
    }
  }

}
</script>

<style lang="scss" scoped>
.da1,
.da2,
.da3,
.da4
{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.dashijian{
    width: 100%;
    height: 100%;
}
.right{
    position: absolute;
    width: 50px;
    height: 50px;
    bottom:95px;
    right:30px;
    // background: #222;
}
.left{
    position: absolute;
    width: 70px;
    height: 50px;
    left:20px;
    bottom:30px;
    // background: #222;
}

.content{
  width: 100%;
  height: calc(93vh);
  background: url(../img/44.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.title{
  width: 80%;
  height: 14%;
  background:rgba(255, 255, 255, 0.8);
  margin:40px auto 20px auto;
  border-radius: 5px;
  padding:5px;
  box-sizing: border-box;
  overflow-y: auto;
  img{
    width: 100%;
  }
}
.fuwenben{
  width: 80%;
  height: 54%;
  background:rgba(255, 255, 255, 0.8);
  margin:0 auto 20px auto;
  border-radius: 5px;
  padding:5px;
  box-sizing: border-box;
  overflow-y: auto;
  img{
    width: 100%;
  }
}
.next{
  width: 80%;
  height: 50px;
  margin:0 auto;
  .nextbutton{
    float: right;
    width: 50px;
    height: 50px;
    background: url(../img/right.png) no-repeat center center;
    background-size: 100%;
  }
}
</style>
