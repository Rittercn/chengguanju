<template>
  <div class="home">
      <!-- <img class="lishi" src="../img/2.jpg"> -->
      <!-- <div class="p1" @click="da"></div>
      <div class="p2" @click="rong"></div>
      <div class="p3" @click="fa"></div>
      <div class="p4" @click="fanhui"></div> -->
      <top/>
      <div class="content">
          <div class="option">
            <div class="list" v-for="item in list" :key="item.Id" @click="gotoactive(item.mid,item.childMenuList,item.menuName,item.menuUrl)">{{item.menuName}}</div>
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
      list:[],
      name:""
    }
  },
  computed:{
    
  },
  created(){
     let id = this.$route.query.id
     this.name = this.$route.query.name
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
    // da(){
    //   this.$router.push('/Memorabilia')
    // },
    // rong(){
    //   this.$router.push('/honor')
    // },
    // fa(){
    //   this.$router.push('/development')
    // },
    fanhui(){
      this.$router.go(-1);
    },
    gotoactive(id,childMenuList,name,url){
      if(url != ""){
        window.location.href = url
      }else{
        if(this.name == "发展建设"){
          if(childMenuList.length == 0){
            this.$router.push('/famemorabilia?id=' + id + '&name=' + this.name)
          }else{
            this.$router.push('/fahonor?id=' + id + '&name=' + this.name)
          }
        }else{
          if(childMenuList.length == 0){
            this.$router.push('/memorabilia?id=' + id + '&name=' + this.name)
          }else{
            this.$router.push('/honor?id=' + id + '&name=' + this.name)
        }
        }
      }
      
      
      
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
  // background: #222;
  width: 200px;
  height: 100px;
  position: absolute;
  top:100px;
  left: 85px;
}
.p2{
  // background: #222;
  width: 200px;
  height: 100px;
  position: absolute;
  top:240px;
  left: 85px;
}
.p3{
  // background: #222;
  width: 200px;
  height: 100px;
  position: absolute;
  top:360px;
  left: 85px;
}
.p4{
  // background: #222;
  width: 80px;
  height: 40px;
  position: absolute;
  bottom:25px;
  left: 15px;
}
.content{
  width: 100%;
  height: calc(93vh);
  background: url(../img/44.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .option{
    width: 80%;
    margin:0 auto;
    display: flex;
    flex-direction:column;
    margin-top:2rem;
    justify-content:center;
    align-items:center;
  }
  .list{
    width: 250px;
    background: url(../img/n1.png) no-repeat center center;
    background-size: 100% 100%;
    height: 60px;
    margin-bottom:40px;
    color:#fff;
    font-size: 22px;
    display: flex;
    justify-content:center;
    align-items:center;
    letter-spacing:8px;
    text-align: center;
  }
  .list:hover{
    width: 250px;
    background: url(../img/n2.png) no-repeat center center;
    background-size: 100% 100%;
    height: 60px;
    margin-bottom:40px;
    color:#fff;
    font-size: 22px;
    display: flex;
    justify-content:center;
    align-items:center;
    letter-spacing:8px;
    text-align: center;
  }
}
</style>
