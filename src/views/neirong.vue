<template>
  <div class="home">
      <div v-if="fa == 1" class="yong">
        <img class="lishi" src="../img/neirong.jpg">
        <div class="fanhui" @click="fanhui"></div>
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

</style>
