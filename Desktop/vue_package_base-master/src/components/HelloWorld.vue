<template>
  <div class="hello">
    <h1>我是界面1</h1>

    <script type="module">
  import lodash from "https://cdn.skypack.dev/lodash";
</script>


    <img src="~_/img/logo.png" alt="" />

    <button @click="request_test()">点我进行请求</button>

    <button @click="request_test_valiate()">点我进行valiate的封装测试</button>
    <button @click="request_test_vuex()">点我进行vuex的封装测试</button>
    <button @click="request_test_vuex_fun()">点我进行vuex的函数封装测试</button>

    <TestChart :chartData="chartData4" width="300px" height="300px"></TestChart>
    <TestChart :chartData="chartData5" width="300px" height="300px"></TestChart>
  </div>
</template>

<script>
import { testget } from "../axios/data.js";

import TestChart from "./echart_test.vue";
export default {
  mounted() {
    //1. 实例化woker,会执行一次里面的方法
    var w1 = new Worker("/data.js");

    //2.数据的发送(主线程收到woker的信息)
    w1.addEventListener("message", function (evt) {
      console.log(evt.data,"父接受")
    });

    //数据的发送(主线程收到woker的信息)
    w1.postMessage("父发送");
    //发送数据给主线程
  },
  name: "HelloWorld",
  data() {
    return {
      chartData: {
        title: {
          text: "ECharts 柱状图",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 2220, 36, 10, 10, 20],
          },
        ],
      },
      chartData1: {
        legend: {
          // Try 'horizontal'
          orient: "vertical",
          right: 10,
          top: "center",
        },
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      },
      chartData2: {
        xAxis: {
          type: "category",
          data: ["A", "B", "C"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150],
            type: "line",
          },
        ],
      },
      chartData3: {
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
          },
        ],
      },
      chartData4: {
        xAxis: {
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yAxis: {},
        series: [
          {
            type: "scatter",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      },
      chartData5: {
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49],
            type: "bar",
            stack: "x",
          },
          {
            data: [5, 4, 3, 5, 10],
            type: "bar",
            stack: "x",
          },
        ],
      },
    };
  },
  components: {
    TestChart,
  },
  props: {
    msg: String,
  },
  methods: {
    request_test() {
      testget()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    request_test_valiate() {
      console.log(
        this.$valiate.validURL("https://user.qzone.qq.com/3451613934/blog/1650817669")
      );
    },
    request_test_vuex() {
      console.log(this.$store.state.test.isCollapse);
    },
    request_test_vuex_fun() {
      this.$store.commit("collapseMenutest");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
