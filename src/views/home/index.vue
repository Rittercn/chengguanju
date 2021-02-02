<template>
  <page-wrapper class="home-container">

    <page-header></page-header>
    <div class="home-container">
       <div class="home-box"></div>
       <div class="home-line"></div>
       
       <div class="home-step" v-for="(stepItem, index) in stepList" :class="{
         [`home-step${stepItem}`]: true,
         'home-step__active': stepIndex === stepItem
       }" @click="step(stepItem)"></div>
       
       <img class="character" ref="character" :class="stepAnimation" :src="characterUrl" v-show="stepAnimation" />
    </div>
    <bottom/>
  </page-wrapper>
</template>

<script>
import api from '../../api.js'
import { characterList, characterMap } from '@/const'
import bottom from '@/components/bottom.vue'
export default {
  components:{
    bottom
  },
  name: 'Index',
  data() {
    return {
       stepList: [1,2,3,4,5],
       stepAnimation: '',
       running: false,
       stepIndex: -1,
       stepAnimationMap: [1, 2, 3, 4, 5],
       characterUrl: '',
       gotourl:[]
    }
  },
  created() {
    const cacheCharacter = window.sessionStorage.getItem('character')
    characterMap[cacheCharacter] && (this.characterUrl = characterMap[cacheCharacter].go)
    let _this = this
    api.api.getHomeMenutree().then(res =>{
      _this.gotourl = res.data.data
    })
  },
  mounted() {
    this.$nextTick(() => {
       const { character = null } = this.$refs
        if (character) {
          character.addEventListener("animationstart", (e) => {
             this.running = true   
          },false);
          
          character.addEventListener("animationiteration", (e) => {
             
          },false);

          character.addEventListener("animationend", (e) => {
              // 跳转路由
              let gotourl = this.gotourl
              
              this.running = false
              if(this.stepIndex == 2){
                this.$router.push('/historical?id=' + gotourl[2].mid + '&name=' + gotourl[2].menuName)
              }
              if(this.stepIndex == 3){
                this.$router.push('/historical?id=' + gotourl[0].mid + '&name=' + gotourl[0].menuName)
              }
              if(this.stepIndex == 4){
                this.$router.push('/weilaicontent')
              }
              if(this.stepIndex == 5){
                window.location.href = 'http://cg.gz.gov.cn/gkmlpt/mindex#787'
              }
          },false);
        }
    })
  },
  methods: {
    step(stepItem) {
       if (this.running) return
       if(stepItem == 1){
          let gotourl = this.gotourl
          this.$router.push('/historical?id=' + gotourl[1].mid + '&name=' + gotourl[1].menuName)
          return
       }
       this.running = false
       this.stepAnimationMap.includes(stepItem) && (this.stepAnimation = `stepAnimation${stepItem}`)
       this.stepIndex = stepItem
       
    }
  }
}
</script>
<style lang="less">
.home-container, .home-box, .home-btn, .home-title, .home-line, .home-step {
	background-repeat: no-repeat;
	background-position: left top;
	background-size: 100% 100%;
}
.home-container, .home-box, .home-line {
	width: 100%;
  height: 100%;
}
.home-container {
  position: relative;
	background-image: url('./bg1.png'); 
}
.home-box {
	background-image: url('./bg2.png');
	background-position: left top;
}
.home-line {
  width: 213.12px;
  height: 399.933px;
  position: absolute;
  top: 180px;
  left: 120px;
  background-image: url('./line.png');
  background-size: 100% 100%;
}


.home-step {
  position: absolute;
}
.home-step1 {
  top: 30px;
  left: 25px;
  width: 200.133px;
  height: 176.49px;
  background-image: url('./step1.png');
}
.home-step2 {
  top: 160px;
  left: 180px;
  width: 160.506px;
  height: 156.843px;
  background-image: url('./step2.png');
}

.home-step3 {
  top: 230px;
  left: 40px;
  width: 160.506px;
  height: 156.843px;
  background-image: url('./step3.png');
}

.home-step4 {
  top: 365px;
  left: 200px;
  width: 167.499px;
  height: 134.199px;
  background-image: url('./step4.png');
}

.home-step5 {
  top: 500px;
  left: 20px;
  width: 199.134px;
  height: 121.878px;
  background-image: url('./step5.png');
}

.home-step__active {
  &.home-step1 {
    background-image: url('./step1-active.png');
  }
  &.home-step2 {
    background-image: url('./step2-active.png');
  }
  &.home-step3 {
    background-image: url('./step3-active.png');
  }
  &.home-step4 {
    background-image: url('./step4-active.png');
  }
  &.home-step5 {
    background-image: url('./step5-active.png');
  }
}

.character {
  position: fixed;
  top: 0;
  left: 0;
  width: 99.9px;
  height: 149.85px;
  z-index: 999;
}


.stepAnimation2, .stepAnimation3, .stepAnimation4, .stepAnimation5 {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}


.stepAnimation1 {
  top: 30px;
  left: 25px;
  transform: rotateY(180deg);
}


.stepAnimation2 {
  transform: rotateY(180deg);
  animation-name: step2;
}


@keyframes step2 {
  from {
     top: 30px;
     left: 25px;
  }
  to {
    top: 160px;
    left: 180px;
  }
}


.stepAnimation3 {
  animation-name: step3;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

@keyframes step3 {
  from {
     top: 160px;
     left: 180px;
  }
  to {
    top: 230px;
    left: 40px;
  }
}


.stepAnimation4 {
  transform: rotateY(180deg);
  animation-name: step4;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

@keyframes step4 {
  from {
     top: 230px;
     left: 40px;
  }
  to {
     top: 365px;
     left: 200px;
  }
}


.stepAnimation5 {
  animation-name: step5;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

@keyframes step5 {
  from {
     top: 365px;
     left: 200px;
  }
  to {
     top: 500px;
     left: 20px;
  }
}
</style>