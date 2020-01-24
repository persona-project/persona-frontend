<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        v-for="(item) in colMenuList "
         v-bind:key="item.index" 
      >
        <el-menu-item :index="item.index">
          <nuxt-link :to="item.link"/>
            <i class="el-icon-menu"></i>
            <!--TODO 添加icon-->
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: ["colMenuList", "backGroundMod"],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>