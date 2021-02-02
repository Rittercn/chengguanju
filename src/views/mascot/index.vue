<template>
  <page-wrapper class="mascot-container">
    <page-header></page-header>
    <div class="mascot-wrapper">
        <div class="mascot-box"></div>
        <div class="mascot-content">
           <div class="mascot-desc-box">
             <img :src="descSrc" class="mascot-desc" />
           </div>
        </div>
        <div class="mascot-character-box">
          <div class="mascot-character">
            <img :src="getCharacter" class="mascot-character-img" />
          </div>
          <template v-if="!enterCharacter">
            <arrow class="fixed-arrow-left" direction="left" @click="prev"></arrow>
            <arrow class="fixed-arrow-right" direction="right" @click="next"></arrow>
          </template>
        </div>
        <div class="mascot-btn-box">
          <router-link v-if="enterCharacter" class="btn btn-image next-character" to="/xiangqing"></router-link>
          <span  v-else class="btn enter-character" @click="enter"></span>
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
        descSrc: require('@/assets/welcome.png'),
        characterIndex: 0,
        enterCharacter: false
     }
  },
  computed: {
    getCharacter() {
       return characterList[this.characterIndex].src
    }
  },
  methods: {
    prev() {
      if (this.characterIndex - 1 < 0) {
         this.characterIndex = characterList.length - 1
      } else {

      this.characterIndex--
      }
    },
    next() {
      if (this.characterIndex + 1 > characterList.length - 1) {
         this.characterIndex = 0
      } else {
         this.characterIndex++
      }
    },
    enter() {
      const selectedCharacter = characterList[this.characterIndex]
      window.sessionStorage.setItem('character', selectedCharacter.key)
      this.descSrc = selectedCharacter.desc
      this.enterCharacter = true
    }
  }
}
</script>
<style lang="less">
.mascot-container, .mascot-wrapper, .mascot-box, .mascot-content, mascot-btn, .enter-character, .next-character {
	background-repeat: no-repeat;
	background-position: left top;
	background-size: 100% 100%;
}

.mascot-container {
	background-image: url('./bg1.png'); 
}
.mascot-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 35px;
  background-image: url('./bg2.png');
}
.mascot-content {
  
}
.mascot-desc-box {
  text-align: center;
}
.mascot-desc {
  width: 272.394px;
  height: 147.519px;
}
.mascot-character-box {
  position: relative;
  text-align: center;
  padding: 0 30px;
}

.mascot-character {
  width: 100%;
  height: 294.039px;
}

.mascot-character-img {
  width: auto;
  height: 294.039px;
}

.fixed-arrow-left, .fixed-arrow-right {
  top: 100px;
  z-index: 999;
}

.mascot-btn-box {
  margin-top: 30px;
  text-align: center;
}

.enter-character {
  width: 170.163px;
  height: 46.953px;
  background-image: url('./enter.png');
}
.next-character {
  width: 170.163px;
  height: 46.953px;
  background-image: url('./next.png');
}

</style>