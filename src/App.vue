<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <router-view></router-view>
  </div>
</template>

<script>
  import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
  export default {
    name: 'app',
    components: {
      NprogressContainer
    }
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
