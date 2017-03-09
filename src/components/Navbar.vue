<template>
  <div class="navbar_container">
    <p class="logo">logo</p>
    <el-menu default-active="1" mode="horizontal" class="nav_menu" >
      <el-menu-item index="1" >系统首页</el-menu-item>
      <el-menu-item index="2" >个人信息</el-menu-item>
      <el-menu-item index="3">修改密码</el-menu-item>
      <el-menu-item index="4">帮助信息</el-menu-item>
      <el-menu-item index="5"><router-link to="/signin">登录</router-link></el-menu-item>
    </el-menu>
  </div>
</template>


<style lang="scss" rel="stylesheet/scss" scoped>
  @import "~@/assets/variables.scss";
  .navbar_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $nav_back_color;
  }
  .nav_menu {
    background: transparent;
  }
  .logo {
    margin-left: 20px;
  }
</style>
