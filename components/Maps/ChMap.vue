<template>
  <div id="mapContainer"></div>
</template>
<script>
import Highcharts from "../../node_modules/highcharts/highmaps";
import chMapData from "../../static/map/chmap";
export default {
  name: "CnMap",
  props: ["recordData"],
  data() {
    return {
      credits: {
        enabled: false
      }
    };
  },
  mounted() {
    this.showChMap();
  },
  methods: {
    showChMap() {
      var ChMap = new Highcharts.Map("mapContainer", {
        title: {
          text: this.recordData.title
        },
         credits: {
        enabled: false
      },
        colorAxis: {
          stops: [
            [0, "#006cee"],
            [0.5, "#fffbbc"],
            [1, "#c4463a"]
          ],
          min: 0,
          max: 100
        },
        series: [
          {
            data: this.recordData.data,
            name: this.recordData.name,
            mapData: chMapData,
            joinBy: "name"
          }
        ],
        tooltip: {
          useHTML: true,
          headerFormat: "<small>{point.properties.fullname}</small><table>",
          pointFormat:
            "<tr><td>城市名:</td><td>{point.properties.fullname}</td></tr>"+
            "<tr><td>人数:</td><td>{point,value}人</td></tr>",
          footFormat: "</table>"
        }
      });
    }
  }
};
</script>
