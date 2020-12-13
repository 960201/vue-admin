<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <!-- 横向导航 -->
      <div>
        <navbar />
        <tags-view />
      </div>
      <!-- 内容区 -->
      <app-main />
      <!-- 设置区 -->
      <!-- <settings /> -->
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, TagsView, AppMain, Settings } from './components'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    TagsView,
    AppMain,
    Settings
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
