<template>
  <div class="defult-conent">
    <RowNavMenu></RowNavMenu>
    <el-col :span="4" class="col-nav-menu">
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <ColNavMenu v-bind:colMenuList="colMenuList" v-bind:backGroundMod="backGroundMod"></ColNavMenu>
      </ul>
    </el-col>
    <main ref="container" class="content-container">
      <nuxt />
    </main>
  </div>
</template>
<script>
import RowNavMenu from "../components/Home/NavMenu/RowNavMenu";
import ColNavMenu from "../components/Home/NavMenu/ColNavMenu";
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
  },
  methods: {
    load() {}
  }
};
</script>
<style lang="scss" scoped>
.col-nav-menu {
  height: 92vh;
  background-color: #545c64;
}
.content-container {
  height: 92vh;
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