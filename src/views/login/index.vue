<template>
  <div class="login-container">
    <h1>login</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      queryModel: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  created() {
    this.login()
  },
  methods: {
    login() {
      this.$store
        .dispatch('user/login', this.queryModel)
        .then(() => {
          // this.$message({
          //   message: '登录成功',
          //   type: 'success'
          // })
        })
        .catch(error => {
          // console.log('有错误', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
