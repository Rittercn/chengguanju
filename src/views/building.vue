<template>
  <div class="home">
      <div v-if="fa == 1" class="yong">
        <img class="lishi" src="../img/duiwu.jpg">
        <!-- <div class="p1" @click="fa = 2"></div>
        <div class="p2" @click="fa = 3"></div> -->
        <div class="list1" @click="gotoinfo"></div>
        <div class="list2" @click="gotoinfo"></div>
        <div class="list3" @click="gotoinfo"></div>
        <div class="fanhui" @click="fanhui"></div>
      </div>

      <div v-if="fa == 2" class="yong">
        <img class="lishi" src="../img/neirong.jpg">
        <div class="fanhui" @click="fa = 1"></div>
      </div>
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
.list1{
    // background: #222; 
    width: 210px;
    height: 90px;
    position: absolute;
    top:115px;
    left: 85px;
}
.list2{
    // background: #222; 
    width: 210px;
    height: 90px;
    position: absolute;
    top:245px;
    left: 85px;
}
.list3{
    // background: #222; 
    width: 210px;
    height: 90px;
    position: absolute;
    top:365px;
    left: 85px;
}
</style>
