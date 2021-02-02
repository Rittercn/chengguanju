<template>
  <div class="home">
      <div v-if="fa == 1" class="yong">
        <img class="lishi" src="../img/fazhan.jpg">
        <div class="p1" @click="gotoinfo"></div>
        <div class="p2" @click="gotoinfo"></div>
        <div class="fanhui" @click="fanhui"></div>
      </div>
      <!-- <div v-if="fa == 2" class="yong">
        <img class="lishi" src="../img/fa1.jpg">
        <div class="gotofazhan" @click="fa = 3"></div>
        <div class="fanhui" @click="fa = 1"></div>
      </div>
      <div v-if="fa == 3" class="yong">
        <img class="lishi" src="../img/fa2.jpg">
        <div class="fanhui" @click="fa = 1"></div>
      </div> -->
  </div>
  
</template>

<script>
export default {
  components:{
   
  },
  data () {
    return {
      fa:1
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
    gotoinfo1(){
        this.$router.push('/Memorabilia1')
    },
    gotoinfo(){
        this.$router.push('/Memorabilia')
    }
  }

}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  position: relative;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.p1{
//   background: #222;
  width: 280px;
  height: 70px;
  position: absolute;
  top:240px;
  left: 45px;
}
.p2{
//   background: #222;
  width: 280px;
  height: 70px;
  position: absolute;
  top:370px;
  left: 45px;
}
.fanhui{
    // background: #222;
    width: 70px;
    height: 35px;
    position: absolute;
    bottom:30px;
    left: 23px;
}
.gotofazhan{
    // background: #222;
    width: 70px;
    height: 45px;
    position: absolute;
    bottom:90px;
    right: 23px;
}
</style>
