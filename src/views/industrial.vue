<template>
  <div class="home">

      <top/>

      <div class="content">
          <div class="optionlist">
            <div class="list" v-for="item in industrial" :key="item.Id" v-on:click="gotourl(item.menuUrl)">{{item.menuName}}</div>
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
   bottom1
  },
  data () {
    return {
      industrial:[
        // {
        //   name:'白云兴丰循环经济产业园',
        //   url:'https://720yun.com/t/ffvkcyr7789?scene_id=62582755'
        // },
        // {
        //   name:'增城仙村循环经济产业园',
        //   url:'https://720yun.com/t/ffvkcyr7789?scene_id=62582754'
        // },
        // {
        //   name:'从化鳌头循环经济产业园',
        //   url:'https://720yun.com/t/ffvkcyr7789?scene_id=62582753'
        // }
      ]
    }
  },
  created(){
     let id = this.$route.query.id
     api.api.getHomeMenuByMId(
       {mId: id}
     ).then(res =>{
      this.industrial = res.data.data
    })
  },
  computed:{
    
  },
  mounted () {
    
  },
  methods: {
    gotourl(url){
      window.location.href = url
    }
  }

}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: calc(93vh);
  background: url(../img/changjing4.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.optionlist{
  width: 80%;
  margin: 30px auto 0 auto;
  display:flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
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
// changyeanniu.png
</style>
