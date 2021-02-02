<template>
  <div class="home">

      <div v-if="kaishi == 1" class="play" @click="playstart()"><img src="../img/play.jpg"></div> 
      <video id="video" v-if="videoguanbi == 1 && mobile=='android'" muted x5-video-player-type="h5" x5-video-player-fullscreen="true" controls> 
        <source :src='cartoon' type="video/mp4">
        您的浏览器不支持Video标签。
      </video>
      <video v-if=" videoguanbi == 1 && mobile=='iPhone'" id="video"
         width="100%"
         height="100%"
         poster="../img/play.jpg"
         :src="cartoon"  >
       </video>
      <div class="guanbi" @click="guanbi()">进入</div>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  components:{
    
  },
  data () {
    return {
      daohan:false,
      videoguanbi:1,
      kaishi:1,
      current:'',
      current2:'',
      mobile:"",
      text:"",

      cartoon:''
    }
  },
  computed:{
    
  },
  created(){
    let _this = this
    console.log(api)
    api.api.getHomeCartoonforeword().then(res =>{
      _this.cartoon = res.data.data[0].cartoonUrl
    })
    this.text=navigator.appVersion
    this.mobile = navigator.appVersion.indexOf('iPhone') !== -1 ? 'iPhone' :  'android'  
  },
  mounted () {
    let video = document.getElementById('video')
  },
  methods: {
    playstart(){
      video.play();
      this.kaishi = 0
    },
    guanbi(){
      this.$router.push('/index#slide4')
    }
  }

}
</script>

<style lang="scss" scoped>
video{
  position: fixed;
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  object-fit: fill;
}
.guanbi{
  border:1px solid #fff;
  border-radius: 10px;
  color:#fff;
  width: 80px;
  height: 30px;
  line-height: 30px;
  position: fixed;
  top:14px;
  right: 15px;
  z-index: 1200;
}
.play{
  img{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: calc(100vh);
    z-index: 1001;
  }
}
</style>
