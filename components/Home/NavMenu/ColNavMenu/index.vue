<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="1"
        router
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        v-for="(item) in colMenuList "
        v-bind:key="item.index"
      >
        <el-menu-item :index="item.link" @click="navRoute">
          <i class="el-icon-menu"></i>
          <!--nuxt-link :to="{name:item.link}"-->
            <!--TODO 添加icon-->
            <span slot="title">{{item.name}}</span>
          <!--/nuxt-link-->
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
    },
    navRoute(index){
      console.log(`This is index=====================${index}`)
      console.dir(index)
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.tac{
  background-color: #545c64;
  .el-menu-vertica{
    position: absolute
  }
}
</style>
