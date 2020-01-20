<template>
  <div></div>
</template>
<script>
import { testPostApi } from "../service/apis";
import { testGetApi } from "../service/apis";
import { testDeleteApi } from "../service/apis";
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
  }
};
</script>