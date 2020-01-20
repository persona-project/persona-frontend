<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>
<script>
export default {
  name: "HistogramChart",
  props: ["recordData"],
  created: function() {
    this.getData();
  },
  methods: {
    getData() {
      this.title = this.recordData.title;
      this.records = this.recordData.data;
    }
  },
  data() {
    return {
      title: "default",
      records: [0],
      chartOptions: {
        credits: {
          enabled: false
        },
        chart: {
          type: "column"
        },
        title: {
          text: this.recordData.title
        },
        xAxis: {
          title: {
            text: this.recordData.xAxis
          }
        },
        yAxis: {
          title: {
            text: this.recordData.yAxis
          }
        },
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 12,
            groupPadding: 0,
            shadow: false,
            datalabels: {
              inside: true
            }
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