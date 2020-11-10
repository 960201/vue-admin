<template>
  <div class="home">
    <div class="div-var">Lorem ipsum dolor sit amet.</div>
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
