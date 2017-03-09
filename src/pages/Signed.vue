<template>
  <div>
    <navbar></navbar>
    <top-menu></top-menu>
    <div class="content">
      <sidebar class="left"></sidebar>
      <router-view class="right"></router-view>
    </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import TopMenu from '@/components/TopMenu'
  import Sidebar from '@/components/Sidebar'
  export default {
    components: {
      Navbar,
      TopMenu,
      Sidebar
    }
  }
</script>


<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~@/assets/variables.scss';
  .content {
    display: flex;
    position: absolute;
    top: 120px;
    bottom: 0;
    left: 0;
    right: 0;
    background: $side_bar_color;
    justify-content: flex-start;
    .left {
      width: 200px;
    }
    .right {
      flex-grow: 1;
      background: $nav_back_color;
    }
  }

</style>
