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
          <div class="fuwenben" v-html="detailed[num]">
          </div>
          <div class="next">
              <div  class="upbutton" @click="up(num)"></div>
              <div class="nextbutton" @click="next(num)"></div>
          </div>
      </div>

      <bottom1/>
  </div>
</template>

<script>
import top from '@/components/top.vue'
import bottom1 from '@/components/bottom1.vue'
import api from '../api.js'
export default {
  components:{
   top,
   bottom1,
  },
  data () {
    return {
      dashijian:1,
      detailed:[],
      num:'',
      maxnum:'',
      detailedcontent:'',

      
      
    }
  },
  computed:{
    
  },
  created(){
     let id = this.$route.query.id
     let name = this.$route.query.name
     let _this = this
     api.api.getLookfutureList(
          
        ).then(res =>{
          _this.detailed = res.data.data
          _this.detailedcontent = res.data.data[0]
          _this.num = 0
          _this.maxnum = res.data.data.length - 1
        })
      
  },
  mounted () {
    
  },
  methods: {
    tianjia(){

    },
    fanhui(){
        this.$router.go(-1);
    },
    gotorongyu(){
        this.$router.push('/honor')
    },
    up(id){
      console.log(id)
      if(id == 0){
        this.$notify.warn('这是最新文章');
      }else{
        this.num = id - 1
      }
    },
    next(id){
      console.log(id)
      console.log(this.maxnum)
      if(id == this.maxnum){
        this.$notify.warn('这是最后文章');
      }else{
        this.num = id + 1
      }
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
.fuwenben{
  width: 80%;
  height: 70%;
  background:rgba(255, 255, 255, 0.8);
  margin:40px auto 20px auto;
  padding:5px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
}
.next{
  width: 80%;
  height: 50px;
  margin:0 auto;
  .upbutton{
    float: left;
    width: 50px;
    height: 50px;
    background: url(../img/left.png) no-repeat center center;
    background-size: 100%;
  }
  .nextbutton{
    float: right;
    width: 50px;
    height: 50px;
    background: url(../img/right.png) no-repeat center center;
    background-size: 100%;
  }
}
</style>
