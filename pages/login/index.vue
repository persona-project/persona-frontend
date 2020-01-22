<template>
  <el-container class="login-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3 class="title">MOOC PESONA</h3>
      <el-form-item label="用户名" prop="username">
        <span class="svg-container svg-container-login">
          <svg-icon icon-class="user" class-name="login-panel-icon" />
        </span>
        <el-input name="usernmae" type="text" v-model="loginform.user_name" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginform.password" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('ruleForm')" class="btn btn-primary btn-ghost btn-shine">登录</el-button>
        <!--el-button @click="resetForm('ruleForm')">重置</el-button-->
      </el-form-item>
    </el-form>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      loginform: {
        user_name: "admin",
        password: "password"
      },
      rules: {}
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3033;
$dark_gray: #889aa4;
$light_gray: #eee;
$light_oringe: #ffd04b;
@font-face {
  font-family: Biko;
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff");
}

.footer {
  font-size: 26px;
  font-weight: 400;
  color: $light_gray;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  justify-content: center;
  align-items: center;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .title {
    font-size: 80px;
    font-family: Biko, sans-serif;
    font-weight: 700;
    color: $light_oringe;
    //line-height: 100vh;
    margin: 0px auto 40px auto;
    //text-transform: uppercase;
    text-align: center;
    //background: white;
    //mix-blend-mode: screen;
  }
}
</style>
<style  rel="stylesheet/scss" lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
.btn {
  margin: 0 auto;
  display: block;
  --hue: 150;
  position: relative;;
  padding: 0.6rem 2rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
   background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 410;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: white;
    }
  }

  &-shine {
    color: white;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(var(--hue), 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }
    &:hover {
      background: transparent;
      box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
}
</style>

