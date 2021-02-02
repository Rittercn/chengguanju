<template>
  <span class="arrow" :class="getDirection" v-bind="$attrs" v-on="$listeners"></span>
</template>

<script>
export default {
  name: 'arrow',
  props: {
    direction: {
       type: String,
       default: 'right'
    }
  },
  computed: {
    getDirection() {
      const direction = this.direction
      return {
        'arrow-left': direction === 'left',
        'arrow-right': direction === 'right'
      }
    }
  }
}
</script>

<style lang="less">
.arrow {
  display: inline-block;
  width: 42.957px;
  height: 38.295px;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100%;
  background-image: url('../assets/arrow.png'); 
}
.arrow-left {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
