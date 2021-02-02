<template>
  <page-wrapper class="move-container">
    <page-header></page-header>
    <div class="move-wrapper">
      <img src="./bg.jpg" alt="" ref="curtain" class="move-bg" :class="{ [`moveAnimation${step}`]: true }" />
      <img :src="runUrl" ref="run" class="character-move" v-show="running" />
      <img :src="stopUrl" ref="stop" class="character-move" v-show="!running" />

      <img class="speak-box" ref="speak" :class="{ speakAnimation: step === 2 }" v-show="step === 2" src="../../assets/welcome.png" alt="" />
      <div class="move-btn-wrapper"  v-show="step === 3">
         <div class="move-btn-box" v-for="(btn, index) in btns" :key="index">
           <router-link v-if="btn.to" class="btn move-btn" :class="btn.class" :style="{ 'background-image': `url(${btn.bg})` }" :to="btn.to"></router-link>
           <span class="btn move-btn" :class="btn.class" :style="{ 'background-image': `url(${btn.bg})` }" @click="() => { btn.click(btn) }" v-else></span>
         </div>
      </div>


      <div class="move-organizational-wrapper"  v-show="step === 5">
         <div class="move-organizational-box" v-for="(btn, index) in orgBtns" :key="`orgBtns-${index}` ">
           <router-link v-if="btn.to" class="btn org-btn" :class="btn.class" :style="{ 'background-image': `url(${btn.bg})` }" :to="btn.to"></router-link>
           <span class="btn move-btn" :class="btn.class" :style="{ 'background-image': `url(${btn.bg})` }" @click="() => { btn.click(btn) }" v-else></span>
         </div>
      </div>
    </div>
  </page-wrapper>
</template>

<script>
import { characterList, characterMap } from '@/const'

export default {
  name: 'Index',
  data() {
     return {
       runUrl: '',
       stopUrl: '',
       step: 1,
       running: true,
       moveDistance: 0,
       timer: null,
       btns: [
         {
           type: 'events',
           label: '大事件',
           bg: require('./events.png'),
           click: this.step3
         },
         {
           type: 'settings',
           label: '机构设置',
           bg: require('./settings.png'),
           to: '/main'
         },
         {
           type: 'honour',
           label: '荣誉表彰',
           bg: require('./honour.png'),
           to: '/main'
         }
       ],
       orgBtns: [
         {
           type: 'duty',
           label: '机构主要职责',
           bg: require('./duty.png'),
           to: '/main'
         },
         {
           type: 'org',
           label: '机构主要职责',
           bg: require('./org.png'),
           to: '/main'
         },
       ]
     }
  },
  created() {
    const cacheCharacter = window.sessionStorage.getItem('character')
    if (characterMap[cacheCharacter]) {
      this.runUrl = characterMap[cacheCharacter].go
      this.stopUrl = characterMap[cacheCharacter].src
    }
  },
  mounted() {
    this.step1()
  },
  methods: {
     animationControl(el, startCallback, endcallback) {
       if (el) {
        const start = (e) => {
           startCallback && startCallback(e)
        }
        const running = (e) => {
        }
        const end = (e) => {
          el.removeEventListener('animationstart', start, false)
          el.removeEventListener('animationiteration', running, false)
          el.removeEventListener('animationend', end, false)
          endcallback && endcallback(e)
        }
        el.addEventListener("animationstart", start, false);
        
        el.addEventListener("animationiteration", running, false);

        el.addEventListener("animationend", end, false);
      }
    },

    step1() {
      this.$nextTick(() => {
         this.animationControl(this.$refs.curtain, () => {
           this.running = true
         }, () => {
           this.running = false
           this.step = 2
           this.step2()
         })
      })
    },

    step2() {
        this.animationControl(this.$refs.speak, () => {
        }, () => {
           this.running = false
           this.step = 3
        })
    },

    step3() {
      this.step = 4
      this.running = true
      this.animationControl(this.$refs.curtain, () => {
      }, () => {
         this.running = false
         this.step = 5
      })
    }
  },
  beforedestroy() {
    this.timer && clearInterval(this.timer)
  }
}
</script>
<style lang="less">
.move-wrapper {
  position: relative;
	width: 100%;
  height: 100%;
  overflow: hidden;
}

.move-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 95%;
  border: none;
}



.character-move {
  position: absolute;
  bottom: 120px;
  left: 0;
  width: 99.9px;
  height: 149.85px;
  z-index: 2;
  transform: rotateY(180deg);
}

.move-btn-wrapper {
  position: absolute;
  z-index: 6;
  width: 100%;
  top: 70px;
}
.move-btn-box {
  text-align: center;
  margin-bottom: 50px;
}

.move-btn {
  width: 221.778px;
  height: 56.610px;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
}



.speakAnimation, .moveAnimation1, .moveAnimation4 {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}


.speak-box {
  position: absolute;
  bottom: 220px;
  left: 60px;
  width: 272.394px;
  height: 147.519px;
  z-index: 2;
  opacity: 0;
}


.moveAnimation1 {
  animation-name: move1;
}

.moveAnimation2 {

}
.moveAnimation3 {

}


@keyframes move1 {
  from {
     transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-205px, 0, 0);
  }
}

.speakAnimation {
  animation-name: move2;
}

@keyframes move2 {
  0%   {
    opacity: 0;
  }
  25%  {
    opacity: 1;
  }
  50%  {
    opacity: 1;
  }
  75%  {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


.moveAnimation4 {
  animation-name: move4;
}


@keyframes move4 {
  from {
     transform: translate3d(-205px, 0, 0);
  }
  to {
    transform: translate3d(-450px, 0, 0);
  }
}

.moveAnimation5 {
  transform: translate3d(-450px, 0, 0);
}

.move-organizational-wrapper {
  position: absolute;
  z-index: 7;
  width: 100%;
  top: 170px;
}
.move-organizational-box {
  margin-bottom: 50px;
  text-align: center;
}
.org-btn {
  width: 262.404px;
  height: 51.948px;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
}
</style>