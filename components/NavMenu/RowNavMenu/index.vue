<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :background-color=colorMod.backgroundColor
      :text-color=colorMod.textColor
      :active-text-color=colorMod.activeTextColor
    >
      <el-col :span="4">
        <el-menu-item>
          <h3 class="title-text">MOOC PERSONA</h3>
        </el-menu-item>
      </el-col>

      <el-menu-item index="1">数据中心</el-menu-item>
      <el-menu-item index="2">数据预测</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>

      <el-menu-item class="mod-switch">
        <el-switch v-model="mod" active-color="#ffd04b" active-text="黑色模式" inactive-text="白色模式"></el-switch>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      mod: false,
      colorMod: {
        backgroundColor: "#545c64",
        textColor: "#fff",
        activeTextColor: "#ffd04b"
      }
    };
  },
  computed(){
    this.backgroundColorFn()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    backgroundColorFn(){
      if(this.mod===true){
        this.colorMod.backgroundColor="#fff"
        this.colorMod.textColor=""
        this.colorMod.activeTextColor=""
      }
    }
  }
  
};
</script>
<style scoped  rel="stylesheet/scss" lang="scss">
.el-menu-demo {
  .title-text {
    &:hover {
      color: #ffd04b;
    }
  }
  .mod-switch {
    position: relative;
    margin-left: 45%;
  }
}
</style>