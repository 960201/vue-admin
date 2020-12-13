<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <sidebar-item />
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  data() {
    return {}
  },
  components: { SidebarItem },
  computed: {
    variables() {
      return variables
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped></style>
