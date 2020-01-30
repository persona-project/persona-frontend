<template>
  <div id="box">
    <el-scrollbar style="height:100%">
      <div class="box"  infinite-scroll-disabled="disabled">
        <ul class="list container">
          <el-card shadow="hover" class="chart-card">
            <h3>MOOC用户年龄比例</h3>
            <el-divider></el-divider>
            <pie-chart v-bind:recordData="ageData" v-if="ageFlag"></pie-chart>
          </el-card>
          <el-card shadow="hover" class="chart-card">
            <h3>MOOC用户地域比例</h3>
            <el-divider></el-divider>
            <ch-map v-bind:recordData="areData" v-if="areaFlag"></ch-map>
          </el-card>
          <el-card shadow="hover" class="chart-card">
            <h3>MOOC用户性别比</h3>
            <el-divider></el-divider>
            <pie-chart v-bind:recordData="sexData" v-if="sexFlag"></pie-chart>
          </el-card>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getAgeCnt } from "../../../service/apis";
import { list2Ob } from "../../../utils/dispose";
import { getAreaCnt } from "../../../service/apis";
import { getSexCnt } from "../../../service/apis";
export default {
  data() {
    return {
      ageFlag: false,
      areaFlag: false,
      sexFlag: false,
      ageData: {
        title: "test////dialogue",
        xAxis: "xAxis",
        yAxis: "yAxis",
        data: [],
        name: "年龄占比"
      },
      areData: {
        titile: "test-map",
        xAxis: "xAxis",
        yAxis: "yAxis",
        data: [
          { name: "上海", value: 100 },
          { name: "重庆", value: 2 }
        ],
        name: "地区占比"
      },
      sexData:{
        data:[]
      }
    };
  },
  created() {
    this.getMessage();
    this.getAreaMessage();
    this.getSexMessage();
  },
  methods: {
    getAreaMessage() {
      let params = {};
      getAreaCnt(params).then(chunck => {
        this.areData.data = chunck.payload;
        console.log(`++++++++++++++++mapdata is ${this.areaData.data}`);
        this.areaFlag = true;
      });
    },
    getSexMessage(){
      let params={};
      getSexCnt(params).then(chunck=>{
        this.sexData=chunck.payload
        this.sexFalg=true
      })
    
    },
    getMessage() {
      let params = {};
      getAgeCnt(params)
        .then(chunck => {
          console.dir(chunck);
          let data = list2Ob(chunck);
          let test = [];
          chunck.forEach(element => {
            test.push([`${element.type} 岁`, element.count]);
          });
          this.ageData.data = test;
          console.log(data.count);
          this.ageFlag = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss">
.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
<style scoped>
#box {
  width: 80%;
  height: 88%;
  position: absolute;
  overflow-y: auto;
}
.box {
  width: 100%;
  margin: 0 auto;
}
.list {
  padding: 0;
  font-size: 14px;
}
.chart-card {
  width: 48%;
  margin: 1%;
}

@keyframes zhuan {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
