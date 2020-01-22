<template>
  <div>
    <NavMenu></NavMenu>
    <div>
      <el-col :span="4">
        <ColNavMenu></ColNavMenu>
      </el-col>
      <el-col :span="20">
        <el-card  shadow="always"></el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
import { testPostApi } from "../service/apis";
import NavMenu from "../components/NavMenu/RowNavMenu";
import ColNavMenu from "../components/NavMenu/ColNavMenu";
export default {
  created() {
    this.testApi();
  },
  methods: {
    testApi() {
      let formData = { key: "value" };
      testPostApi(formData)
        .then(chunck => {
          console.dir(chunck);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    NavMenu,
    ColNavMenu
  }
};
</script>