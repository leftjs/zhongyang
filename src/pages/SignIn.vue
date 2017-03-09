<template>
  <div class="wrapper">

    <el-form v-model="loginForm" class="form" ref="loginForm">
      <h3 class="title">系统登录</h3>
      <el-form-item >
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input v-model="loginForm.password" place></el-input>
      </el-form-item>
      <el-form-item style="text-align: left">
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        }
      }
    },
    methods: {
      login() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  @import '~@/assets/variables.scss';
  .wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    margin: 0;
    padding: 0;
    text-align: center;
    background: $side_bar_color;
  }
  .form {
    margin: 180px auto;
    background: $nav_back_color;
    width: 350px;
    padding: 35px;
    border: 2px solid #8492a6;
    border-radius: 5px;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
