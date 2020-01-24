<template>
  <div>
    <el-card>
      <line-chart v-bind:recordData="recordData"></line-chart>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      recordData:{
        title:"test////dialogue",
        xAxis:"xAxis",
        yAxis:"yAxis",
        data:[12,12,34,12,35,45,67,78]
      }
    }
  }
};
</script>
