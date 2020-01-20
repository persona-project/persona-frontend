<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>
<script>
export default {
  name: "LineChart",
  props: ["recordData"],
  data() {
    return {
      chartOptions: {
        credits: {
          enabled: false
        },
        title: {
          text: this.recordData.title
        },
        yAxis: {
          title: {
            text: this.recordData.yAxis
          }
        },
        xAxis: {
          title: {
            text: this.recordData.xAxis
          }
        },
        series: [
          {
            data: this.recordData.data
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
</style>