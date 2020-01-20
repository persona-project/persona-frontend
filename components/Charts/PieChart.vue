<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>
<script>
export default {
  name: "PieChart",
  props: ["recordData"],
  data() {
    return {
      chartOptions: {
        credits: {
          enabled: false
        },
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
          //spacing: [100, 0, 40, 0]
        },
        title: {
          floating: true,
          text: this.recordData.title
        },
        plotOptions: {
          pie: {
            startAngle: 0,
            endAngle: 360,
            allowPointSelect: true,
            cursor: "pointer"
          }
        },
        series: [
          {
            type: "pie",
            innerSize: "60%",
            size: "80%",
            name: this.recordData.name,
            data: this.recordData.data
          }
        ]
      }
    };
  }
};
</script>