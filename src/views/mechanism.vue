<template>
  <div class="home">
      <div v-if="jianshe == 1" class="yong">
        <img class="lishi" src="../img/jianshe.jpg">
        <div class="p1" @click="jianshe = 2"></div>
        <div class="p2" @click="jianshe = 3"></div>
        <div class="fanhui" @click="fanhui"></div>
      </div>
      <div v-if="jianshe == 2" class="yong">
        <img class="lishi" src="../img/3-1.jpg">
        <div class="p1" @click="gotoindustrial"></div>
        <div class="p2" @click="jianshe = 31"></div>
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>
      <div v-if="jianshe == 3" class="yong">
        <img class="lishi" src="../img/4-1.jpg">

        <div class="zhineng1" @click="jianshe = 41"></div>
        <div class="zhineng2" @click="jianshe = 42"></div>
        <div class="zhineng3" @click="jianshe = 43"></div>

        <div class="zhineng4" @click="jianshe = 44"></div>
        <div class="zhineng5" @click="jianshe = 45"></div>
        <div class="zhineng6" @click="jianshe = 46"></div>


        <div class="fanhui" @click="jianshe = 1"></div>
      </div>
      <div v-if="jianshe == 31" class="yong">
        <img class="lishi" src="../img/shebei.jpg">
        <div class="jianshe1"></div>
        <div class="jianshe2"></div>
        <div class="jianshe3"></div>
        <!-- <div class="p1" @click="jianshe = 21"></div>
        <div class="p2" @click="jianshe = 31"></div> -->
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>
      
      <div v-if="jianshe == 21" class="yong">
        <img class="lishi" src="../img/3-1-1.jpg">
        <div class="list1" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582755')"></div>
        <div class="list2" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582754')"></div>
        <div class="list3" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582753')"></div>

        <div class="list4" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582752')"></div>
        <div class="list5" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582751')"></div>
        <div class="list6" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582750')"></div>

        <div class="list7" @click="gotochangye('https://720yun.com/t/ffvkcyr7789?scene_id=62582749')"></div>
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>

      <div v-if="jianshe == 41" class="yong">
        <img class="lishi" src="../img/4-1-1.jpg">
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>

      <div v-if="jianshe == 42" class="yong">
        <img class="lishi" src="../img/4-1-2.jpg">
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>

      <div v-if="jianshe == 43" class="yong">
        <img class="lishi" src="../img/4-1-3.jpg">
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>

      <div v-if="jianshe == 44" class="yong">
        <img class="lishi" src="../img/4-1-4.jpg">
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>

      <div v-if="jianshe == 45" class="yong">
        <img class="lishi" src="../img/4-1-5.jpg">
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>

      <div v-if="jianshe == 46" class="yong">
        <img class="lishi" src="../img/4-1-6.jpg">
        <div class="fanhui" @click="jianshe = 1"></div>
      </div>
    
      
  </div>
  
</template>

<script>
export default {
  components:{
   
  },
  data () {
    return {
      jianshe:1
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
    gotochangye(url){
        window.location.href = url
    },
    gotoindustrial(){
      this.$router.push('/industrial')
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
  width: 200px;
  height: 100px;
  position: absolute;
  top:190px;
  left: 85px;
}
.p2{
//   background: #222;
  width: 200px;
  height: 100px;
  position: absolute;
  top:350px;
  left: 85px;
}
.fanhui{
    // background: #222;
    width: 70px;
    height: 35px;
    position: absolute;
    bottom:30px;
    left: 23px;
}
.list1{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:80px;
    left: 23px;
}
.list2{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:80px;
    left: 190px;
}
.list3{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:240px;
    left: 23px;
}
.list4{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:240px;
    left: 190px;
}
.list5{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:400px;
    left: 23px;
}
.list6{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:400px;
    left: 190px;
}
.list7{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:550px;
    left: 23px;
}
.jianshe1{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:130px;
    left: 160px;
}
.jianshe2{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:310px;
    left: 30px;
}
.jianshe3{
    // background: #222;
    width: 160px;
    height: 145px;
    position: absolute;
    top:460px;
    left: 160px;
}
.zhineng1{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:100px;
    left: 30px;
}
.zhineng2{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:190px;
    left: 30px;
}
.zhineng3{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:280px;
    left: 30px;
}
.zhineng4{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:370px;
    left: 30px;
}
.zhineng5{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:460px;
    left: 30px;
}
.zhineng6{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:550px;
    left: 30px;
}
.zhineng7{
    // background: #222;
    width: 320px;
    height: 65px;
    position: absolute;
    top:640px;
    left: 30px;
}

</style>
