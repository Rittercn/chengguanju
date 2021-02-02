<template>
  <div class="home">
      <!-- <div v-if="yong == 1" class="yong">
        <img class="lishi" src="../img/yongyu.jpg">
        <div class="p1" @click="gotoinfo1"></div>
        <div class="p2" @click="gotoinfo"></div>
        <div class="fanhui" @click="fanhui"></div>
      </div> -->
      <!-- <div v-if="yong == 2" class="yong">
        <img class="lishi" src="../img/yong1.jpg">
        <div class="gotofazhan" @click="gotofazhan()"></div>
        <div class="fanhui" @click="yong = 1"></div>
      </div>
      <div v-if="yong == 3" class="yong">
        <img class="lishi" src="../img/yong2.jpg">
        <div class="gotofazhan" @click="gotofazhan()"></div>
        <div class="fanhui" @click="yong = 1"></div>

      </div> -->
      <top/>
      <div class="content">
          <div class="option">
            <div class="list" v-for="item in list" :key="item.Id" @click="gotoactive(item.mid,item.childMenuList,item.menuName)">
                <div class="listcontent">{{item.menuName}}</div>
            </div>
          </div>
      </div>
      <bottom1/>
  </div>
  
</template>

<script>
import top from '@/components/top.vue'
import api from '../api.js'
import bottom1 from '@/components/bottom1.vue'
export default {
  components:{
   top,
   bottom1
  },
  data () {
    return {
      list:[]
    }
  },
  computed:{
    
  },
  created(){
     let id = this.$route.query.id
     api.api.getHomeMenuByMId(
       {mId: id}
     ).then(res =>{
      this.list = res.data.data
      console.log(this.list)
    })
  },
  mounted () {
    
  },
  methods: {
    gotoactive(id,childMenuList,name){
      if(childMenuList.length == 0){
        this.$router.push('/famemorabilia?id=' + id)
      }else{
        this.$router.push('/fahonor?id=' + id)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: calc(93vh);
  background: url(../img/44.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .option{
    width: 80%;
    height: 350px;
    margin:0 auto;
    display: flex;
    flex-direction:column;
    margin-top:2rem;
    justify-content:center;
    align-items:center;
  }
  .list:nth-child(odd){
    .listcontent{
      float: right;
    }
  }
  // .list{
  //   width: 100%;
  //   height: 170px;
  //   color:#fff;
  //   font-size: 18px;
  //   letter-spacing:8px;
  //   text-align: center;
  //   .listcontent{
  //     width: 130px;
  //     height: 130px;
  //     line-height: 40px;
  //     background: url(../img/changyeanniu.png) no-repeat center center;
  //     background-size: 100% 100%;
  //     padding:25px 15px 15px 20px;
  //     box-sizing: border-box;
  //   }
  // }
  .list{
    background:url(../img/n6.png) no-repeat center center;
    width: 100%;
    background-size: 100% 100%;
    height: 40px;
    margin-bottom:25px;
    color:#fff;
    display: flex;
    justify-content:center;
    align-items:center;
    letter-spacing:8px;
    text-align: center;
  }
  .list:hover{
    background:url(../img/n5.png) no-repeat center center;
    width: 100%;
    background-size: 100% 100%;
    height: 40px;
    margin-bottom:25px;
    color:#fff;
    display: flex;
    justify-content:center;
    align-items:center;
    letter-spacing:8px;
    text-align: center;
  }
}
</style>
