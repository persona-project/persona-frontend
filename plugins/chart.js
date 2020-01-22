import Vue from 'vue'
import HistogramChart from "../components/Charts/HistogramChart"
import AreaChart from "../components/Charts/AreaChart"
import LineChart from "../components/Charts/LineChart"
import PieChart from "../components/Charts/PieChart"

Vue.component('histogram-chart',HistogramChart)
Vue.component('area-chart',AreaChart)
Vue.component('line-chart',LineChart)
Vue.component('pie-chart',PieChart)