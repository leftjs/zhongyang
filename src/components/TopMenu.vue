<template>
  <div class="top_menu">
    <span class="time">{{ now }}</span>
    <el-menu class="top_menu_list" default-active="1" mode="horizontal">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">基地管理</el-menu-item>
      <el-menu-item index="3">计划管理</el-menu-item>
      <el-menu-item index="4">合同管理</el-menu-item>
      <el-menu-item index="5">质量管理</el-menu-item>
    </el-menu>
  </div>
</template>


<script>
  import moment from 'moment'
  export default{
    data() {
      return {
        now: moment().format('YYYY年M月D日')
      }
    }
  }
</script>


<style lang="scss" rel="stylesheet/scss" scoped>
  @import '~@/assets/variables';
  .top_menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: $top_menu_color;
  }
  .time {
    padding: 0 20px;
  }
  .top_menu_list {
    background: transparent;
  }
</style>
