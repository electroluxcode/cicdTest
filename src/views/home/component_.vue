<template>
  <div class="hello">
    <h1>我是界面1</h1>
    <button @click="request_test()">点我进行请求</button>

    <button @click="request_test_valiate()">点我进行valiate的封装测试</button>
    <button @click="request_test_vuex()">点我进行vuex的封装测试</button>
    <button @click="request_test_vuex_fun()">点我进行vuex的函数封装测试</button>
   
    <!-- <TestChart :chartData="chartData5" width="300px" height="300px"></TestChart> -->
    <component :is="activeComponent" :chartData="chartData5" width="300px" height="300px"></component>
   
  </div>
</template>

<script>
import { testget } from "@/axios/data.js";
// import * as requireComponents from "@/utils/components.js";
// import TestChart from "@/components/echart_test.vue";
export default {
  name: "HelloWorld1",

  data() {
    return {
      activeComponent: "HelloWorld",
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
      chartData5:{
        xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 43, 49],
      type: 'bar',
      stack: 'x'
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'bar',
      stack: 'x'
    }
  ]
      }
    };
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
        this.$valiate.validURL(
          "https://user.qzone.qq.com/3451613934/blog/1650817669"
        )
      );
    },
    request_test_vuex() {
      console.log(this.$store.state.admin);
    },
    request_test_vuex_fun() {
      this.$store.dispatch("admin/actionVuex");
    },
    
  },
  mounted() {
        console.log()
    },
      components: {},
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
