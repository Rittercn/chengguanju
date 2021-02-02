<template>
  <div class="home">
      <top/>
      <div class="slidebottom">
      <swiper class="mySwiper" ref="mySwiper" :options="swiperOptions">
          
         <swiper-slide data-hash="slide1">
              <div class="home3">
                  <div class="point1" @click="gotolishi('/historical?id=' + gotourl[1].mid + '&name=' + gotourl[1].menuName)"></div>
                  <div class="point2" @click="gotolishi('/historical?id=' + gotourl[2].mid+ '&name=' + gotourl[2].menuName)"></div>
                  <div class="point3" @click="gotolishi('/historical?id=' + gotourl[0].mid+ '&name=' + gotourl[0].menuName)"></div>
                  <div class="point4" @click="gotolishi('/weilaicontent')"></div>
                  <div class="point5" @click="gotochaxun()"></div>
                  <div class="signin" ></div>
                  <bottom/>
              </div>
          </swiper-slide>
          
          <swiper-slide data-hash="slide2">
              
          </swiper-slide>

          <swiper-slide data-hash="slide3">
              <div class="home2">
                  <div class="content" v-html="qianyang">
                      
                  </div>
                  <img class="xiahua" src="../img/xiahua.gif" alt="">
              </div>
          </swiper-slide>
              
           <swiper-slide data-hash="slide4">
              <div class="home1">
                  <img src="../img/xiahua.gif" alt="">
              </div>
          </swiper-slide>

          

          
    </swiper>
    </div>
  </div>
</template>

<script>
import api from '../api.js'
import top from '@/components/top.vue'
import bottom from '@/components/bottom.vue'
import { Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components:{
    top,
    bottom,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
          direction : 'vertical',
          
          hashNavigation: true,
          observer:true,
          observeParents:true,
          observeSlideChildren:true,
          // Some Swiper option/callback...
      },
      daohan:false,
      videoguanbi:1,
      kaishi:1,
      current:'',
      current2:'',
      option:['历史沿革','队伍展示','建设发展','未来展望','政策查询'],
      optionsecond:['大事记','荣耀展示','发展现状'],
      mobile:"",
      text:"",
      qianyang:'',

      gotourl:[]
    }
  },
  computed:{
    swiper: function () {
      return this.$refs.mySwiper.swiper
    },
  },
  created(){
    let _this = this
    api.api.getHomeCartoonforeword().then(res =>{
      _this.qianyang = res.data.data[0].foreWord
    })
    api.api.getHomeMenutree().then(res =>{
      _this.gotourl = res.data.data
    })
    this.text=navigator.appVersion
    this.mobile = navigator.appVersion.indexOf('iPhone') !== -1 ? 'iPhone' :  'android'  
  },
  mounted () {
    let video = document.getElementById('video')
  },
  methods: {
    gotochaxun(){
      window.location.href = 'http://cg.gz.gov.cn/gkmlpt/mindex#787'
    },
    gotolishi(url){
      this.$router.push(url)
    },
    playstart(){
      video.play();
      this.kaishi = 0
    },
    guanbi(){
      this.videoguanbi = 0
      this.kaishi = 0
    },
    toslide(){
        this.$router.push('/#slide2')
    }
  }

}
</script>

<style lang="scss" scoped>
.mySwiper{
  height: calc(93vh);
}
.home1{
  background: url('../img/index.png') no-repeat center center;
  height: 100%;
  background-size: 100%;
  position: relative;
  img{
    width: 50px;
    height: 50px;
    position: absolute;
    top:62%;
    left: 44%;
  }
}
.home2{
  background: url('../img/index2.jpg') no-repeat center center;
  height: 100%;
  background-size: 100%;
  position: relative;
  overflow: hidden;
  .content{
    background: #fff;
    width: 85%;
    height: 60%;
    margin:0 auto;
    margin-top:3rem;
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
.home3{
  background: url('../img/index3.jpg') no-repeat center center;
  background-color: #dbf6ff;
  height: 100%;
  background-size: 90%;
  position: relative;
  overflow: hidden;
  .point1,
  .point2,
  .point3,
  .point4,
  .point5
  {
    position: absolute;
    width: 100px;
    height: 100px;
  }
  .point1{
    top:8%;
    left: 14%;
  }
  .point2{
    top:22%;
    left: 58%;
  }
  .point3{
    top:38%;
    left: 14%;
  }
  .point4{
    top:54%;
    left: 58%;
  }
  .point5{
    top:72%;
    left: 14%;
  }
  .signin{
    background: url(../img/qiandao.jpg) no-repeat center center;
    width: 100px;
    height: 50px;
    background-size:100%;
    float: right;
    margin:10px 20px 0 0;
  }
  .bottom{
    position: absolute;
    bottom:0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items:center;
    .goback{
      width: 80px;
      height: 30px;
      background: url(../img/fanhui.jpg) no-repeat center center; 
      background-size:90%;
      z-index:101
    }
    .lvyin{
      width: 120px;
      height: 60px;
      background: url(../img/luyin.jpg) no-repeat center center; 
      background-size:100%;
      z-index:101
    }
    .option{
      width: 80px;
      height: 30px;
      background: url(../img/daohan.jpg) no-repeat center center; 
      background-size:90%;
      z-index:101
    }
    .optionhover{
      width: 80px;
      height: 30px;
      background: url(../img/daohanhover.jpg) no-repeat center center; 
      background-size:90%;
      z-index:101
    }
  }
}
.mask{
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.8;
  z-index: 100;
}
.optionlist{
    position: absolute;
    width: 230px;
    height: 270px;
    right: 0;
    bottom: 60px;
    z-index:123;
    .first{
      float: right;
      padding-right:10px;
      height: 270px;
      display: flex;
      flex-direction:column;
      .onelist{
        width: 95px;
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        font-size: 14px;
        // background: url(../img/anniu.jpg) no-repeat center center;
        background: #fff;
        border-radius: 30px;
        background-size:90%;
        color:#0060FF;
      }
      .selected{
        background: #0060FF;
        color:#fff
      }
      .index{
        font-weight: bold;
      }
    }
    .second{
      float: right;
      padding-right:10px;
      height: 270px;
      display: flex;
      flex-direction:column;
      .onelist{
        width: 100px;
        height: 30px;
        line-height: 30px;
        margin-top: 15px;
        font-size: 14px;
        // background: url(../img/anniu.jpg) no-repeat center center;
        background: #fff;
        border-radius: 0 15px 0 15px;
        background-size:90%;
        color:#0060FF;
        border:1px solid #0060FF
      }
      .selected{
        background: #0060FF;
        color:#fff
      }
    }
}
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
