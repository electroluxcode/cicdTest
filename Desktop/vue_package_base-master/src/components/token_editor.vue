<template>
  <div class="hello">
    <h1>我是editor才能访问的界面</h1>
    <button @click="request_test()">点我进行请求</button>
  </div>
</template>

<script>
import { testget } from "../axios/data.js";
export default {
  name: "HelloWorld2",
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
