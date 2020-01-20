<template>
  <div>
    <LineChart v-bind:recordData="recordData"></LineChart>
    <PieChart v-bind:recordData="recordData"></PieChart>
    <HistogramChart v-bind:recordData="recordData"></HistogramChart>
    <AreaChart v-bind:recordData="recordData"></AreaChart>
  </div>
</template>
<script>
import LineChart from "../components/Charts/LineChart";
import PieChart from "../components/Charts/PieChart";
import HistogramChart from "../components/Charts/HistogramChart";
import AreaChart from "../components/Charts/AreaChart";
export default {
  data() {
    return {
      recordData: {
        title: "hhhh",
        xAxis: "x轴",
        yAxis: "y轴",
        data: [10, 80, 90, 20, 50, 80]
      }
    };
  },
  components: {
    LineChart,
    PieChart,
    HistogramChart,
    AreaChart
  }
};
</script>