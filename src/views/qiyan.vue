<template>
  <div class="home">

    <top/>
    <div class="home2">
        <div class="content" v-html="qianyang">
            
        </div>
        <div class="bg1" @click="gotourl"></div>
    </div>
          
    
  </div>
</template>

<script>
import api from '../api.js'
import top from '@/components/top.vue'
import bottom from '@/components/bottom.vue'
import 'swiper/css/swiper.css'
export default {
  components:{
    top,
    bottom,
   
  },
  data () {
    return {
        qianyang:'',
    }
  },
  computed:{
    
  },
  created(){
    let _this = this
    api.api.getHomeCartoonforeword().then(res =>{
      _this.qianyang = res.data.data[0].foreWord
    })
  },
  mounted () {
    
  },
  methods: {
    gotourl(){
      this.$router.push('/mascot')
    }
  }

}
</script>

<style lang="scss" scoped>
.home2{
  background: url('../img/1.png') no-repeat center center;
  height: calc(93vh);
  background-size: 100%;
  position: relative;
  overflow: hidden;
  .content{
    background: #fff;
    width: 85%;
    height: 60%;
    margin:0 auto;
    margin-top:30px;
    border-radius: 5px;
    overflow-y: auto;
  }
  .qianyan{
    width: 100%;
    height: 100%;
  }
  .xiahua{
    width: 50px;
    height: 50px;
    position: absolute;
    top:75%;
    left: 44%;
  }
}
.bg1{
    background: url('../img/21.png') no-repeat;
    background-size: 100% 100%; 
    width: 55%;
    height: 55px;
    margin:30px auto 0 auto;
}
.bg1:hover{
    background: url('../img/22.png') no-repeat;
    background-size: 100% 100%; 
    width: 55%;
    height: 55px;
    margin:30px auto 0 auto;
}
</style>
