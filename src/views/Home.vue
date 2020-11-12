<template>
  <div class="home">
    <div class="div-var">Lorem ipsum dolor sit amet.</div>
    <div class="div-var">
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.div-var {
  color: $yellow;
  @include clearfix;
  box-shadow: 2px 2px 5px #333333;
}
</style>
