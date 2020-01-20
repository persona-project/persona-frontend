<template>
  <div>
    <highcharts :options="chartOptions" :callback="myCallback"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts/highcharts";
export default {
  name: "AreaChart",
  props: ["recordData"],
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.myTitle = this.recordData.title;
      this.myRecords = this.recordData.data;
      console.log(`son ======title is ${this.myTitle}`);
      console.dir(this.recordData);
    },
    myCallback(){
      
    }
  },
  data() {
    return {
      myTitle: "default",
      myRecords: [0],
      chartOptions: {
        chart: {
          type: "area"
        },
        title: {
          text: this.recordData.title
        },
        yAxis: {
          title: {
            //TODO
            text: this.recordData.yAxis
          }
        },
        xAixs: {
          titile: {
            text: this.recordData.xAixs
          }
        },
        legent: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },
        plotOptions: {
          areas: {
            fillOpacity: 0.7,
            pointStart: 1,
            marker: {
              enabled: false,
              symble: "circle",
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "hh",
            color: "lightgreen",
            // fillColor: {
            //   // 设置渐变的填充颜色
            //   linearGradient: {
            //     x1: 0,
            //     y1: 0,
            //     x2: 0,
            //     y2: 1
            //   },
            //   stops: [
            //     [0, Highcharts.getOptions().colors[5]],
            //     [
            //       1,
            //       Highcharts.Color(Highcharts.getOptions().colors[6])
            //         .setOpacity(0)
            //         .get("rgba")
            //     ]
            //   ]
            // },
            data: this.recordData.data
          }
        ]
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.highcharts-container {
  width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  margin: auto;
}
</style>