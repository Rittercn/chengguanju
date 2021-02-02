<template>
  <div class="bottomcontent">
        <div class="bottom">
            <div class="goback" @click="toslide()"></div>
            <div class="lvyin" ></div>
            <div v-if="daohan == false" class="option" @click="open()"></div>
            <div v-if="daohan == true" class="optionhover" @click="close()"></div>
        </div>

        <div v-if="daohan == true" class="optionlist">
        <div class="first">
            <div class="onelist index" @click="gotoindex">首页</div>
            <div class="onelist" v-for="item in option" :key="item.Id" v-on:click="addClass(item.menuName,item.mid)" :class="{selected:item.menuName==current}">{{item.menuName}}</div>
        </div>

        <div class="second" v-if="dier == 1">
            <div class="onelist" v-for="item in optionsecond" :key="item.Id" v-on:click="addClass2(item.menuName,item.mid,item)" :class="{selected:item.menuName==current2}">{{item.menuName}}</div>
        </div>
        </div>

        <div v-if="daohan == true" class="mask">
            
        </div>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  data () {
    return {
      current:'',
      current2:'',
      option:['历史沿革','队伍建设','建设发展','未来展望','政策查询'],
      optionsecond:['大事记','荣耀展示','发展现状'],
      mobile:"",
      text:"",
      daohan:false,

      dier:0,
      dalei:''
    }
  },
  created(){
    let _this = this
    api.api.getHomeMenutree().then(res =>{
      this.option = res.data.data
      // _this.qianyang = res.data.data[0].foreWord
    })
  },
  methods: {
    toslide(){
      this.$router.go(-1);
    },
    gotoindex(){
      this.$router.push('/')
    },
    open(){
      this.daohan = true
    },
    close(){
      this.daohan = false
    },
    addClass(index,id){
      this.current=index; 
      if(index == '历史沿革'){
        // this.$router.push('/historical')
        api.api.getHomeMenuByMId(
          {mId: id}
        ).then(res =>{
          this.optionsecond = res.data.data
          this.dier = 1
          this.dalei = '历史沿革'
        })
      }
      if(index == '队伍建设'){
        this.$router.push('/building?id=54&name=队伍建设')
      }
      if(index == '建设发展'){
        this.$router.push('/historical?id=54&name=队伍建设')
      }
      if(index == '政策查询'){
        window.location.href = 'http://cg.gz.gov.cn/gkmlpt/mindex#787'
      }
      if(index == '未来展望'){
        this.$router.push('/weilaicontent')
      }
    },
    addClass2(index,id,qb){
      this.current2=index;
      if(qb.childMenuList.length == 0){
        this.$router.push('/memorabilia?id=' + id + '&name=' + this.dalei)
      }else{
        this.$router.push('/honor?id=' + id + '&name=' + this.dalei)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.mask{
  width: 100%;
  height: calc(100vh);
  background: #fff;
  opacity: 0.8;
  position: fixed;
  top: 0;
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
</style>
