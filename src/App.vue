<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import '~@/assets/variables.scss';
  html, body, div#app {
    width: 100%;
    height: 100%;
    min-width: $screen_width;
  }
  a {
    text-decoration: none;
  }
</style>
