<template>
  <div class="container">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page-wrapper'
}
</script>

<style>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.page-fixed {
  padding-top: 36.33297px;
}
</style>
