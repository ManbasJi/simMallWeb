<template>
  <div class="register-container">
    <el-form class="register-form" autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm" label-position="left">
      <div class="title-container">
        <h3 class="title">用户注册</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_register">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="registerForm.username" placeholder="手机号码" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="pwdType" v-model="registerForm.password" placeholder="密码" />
        <span class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>  
      </el-form-item>
      <el-form-item prop="smscode" style='position:relative;'>
        <span class="svg-container svg-container_register">
          <svg-icon icon-class="mobile" />
        </span>
        <el-input name="smscode" type="text" autoComplete="on" placeholder="短信验证码" v-model="registerForm.smscode" />
        <el-button type="warning" round style="position:absolute;right:10px; top:5px;" @click="smsCode">获取验证码</el-button>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleRegiter">注册</el-button>
      <div class="tips">
        <span style="margin-right:20px;">
          <router-link to="/resetpwd">忘记密码?</router-link>
        </span>
        <span style="margin-right:20px; float:right;">
          <router-link to="/login">登录</router-link>
        </span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { setRegiter, getSMSCode } from '@/api/login'
import { Message } from 'element-ui'
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'register',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的11位手机号码'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不能少于6位'))
      } else {
        callback()
      }
    }
    const validateSMSCode = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确的短信验证码'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        username: '',
        password: '',
        smscode: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        smscode: [{ required: true, trigger: 'blur', validator: validateSMSCode }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    smsCode() {
      console.log(this.registerForm.username)
      if (this.registerForm.username === '') {
        Message({
          message: '请输入手机号码',
          type: 'error',
          duration: 3 * 1000
        })
        return
      }
      this.loading = true
      getSMSCode(this.registerForm.username).then((res) => {
        this.loading = false
        if (res.code === 0) {
          Message({
            message: '验证码已发送',
            type: 'success',
            duration: 3 * 1000
          })
          return
        }
        if (res.code === 2000) {
          Message({
            message: '该手机号码以被注册',
            type: 'error',
            duration: 3 * 1000
          })
        }
        Message({
          message: res.msg,
          type: 'error',
          duration: 3 * 1000
        })
        return
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },
    handleRegiter() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          setRegiter(this.registerForm.username, this.registerForm.password, this.registerForm.smscode).then((res) => {
            this.loading = false
            if (res.code === 2001) {
              Message({
                message: '验证码错误',
                type: 'error',
                duration: 3 * 1000
              })
              return
            }
            Message({
              message: '注册成功',
              type: 'success',
              duration: 1 * 1000,
              onClose: () => {
                this.$router.push({ path: '/login' })
              }
            })
          }).catch((err) => {
            console.log(err)
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;
/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.register-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .register-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
}
</style>

