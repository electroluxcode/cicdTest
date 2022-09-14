<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from "echarts";

require("echarts/theme/macarons"); // echarts theme

export default {
  name:"echart_test",
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    //   在组建再次渲染时，调用 this.initChart()初始化echarts图表
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose(); //在组件销毁的时候，调用chart.dispose()销毁图表实例
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el); //调用echarts.init()方法初始化图表
      this.setOptions(this.chartData);
      /*
      设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 setOption 完成，
      ECharts 会合并新的参数和数据，然后刷新图表。
      如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
      */
    },

    setOptions() {
    //   this.chart.setOption({
    //     title: {
    //       text: "ECharts 柱状图",
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: "销量",
    //         type: "bar",
    //         data: [5, 20, 36, 10, 10, 20],
    //       },
    //     ],
    //   });
     this.chart.setOption(this.chartData);
    },
  },
};
</script>