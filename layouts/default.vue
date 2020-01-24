<template>
  <div class="default-content">
    <RowNavMenu></RowNavMenu>
    <div>
      <el-col :span="4">
        <ColNavMenu v-bind:colMenuList="colMenuList" v-bind:backGroundMod="backGroundMod"></ColNavMenu>
      </el-col>
    </div>
    <main ref="container" class="content-container">
      <nuxt />
    </main>
  </div>
</template>
<script>
import RowNavMenu from "../components/NavMenu/RowNavMenu";
import ColNavMenu from "../components/NavMenu/ColNavMenu";
export default {
  data() {
    return {
      colMenuList: [
        { name: "人群画像", index: "1", link: "/datacenter/crowd" },
        { name: "会话环境", index: "2", link: "/datacenter/behaviour" },
        { name: "行为画像", index: "3", link: "/datacenter/dialogue" }
      ]
    };
  },
  components: {
    RowNavMenu,
    ColNavMenu
  }
};
</script>
<style lang="scss" scoped>
.content-container {
  margin-left: 17%;
  margin-top: 1%;
  margin-right: 1%;
}
</style>
<style lang="scss" scoped>
// .default-content{
//   background-color: #545c64
// }
</style>