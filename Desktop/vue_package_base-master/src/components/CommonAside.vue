<template>
  <!-- 侧边栏知识点1：
    el-menu中 
    1.background-color 2.text-color 3.active-text-color 4.collapse比较重要
  -->
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>

    <!-- 侧边栏知识点2：
    利用计算属性来对无chirdren的el-menu-item侧边栏进行渲染
    注意，这里我们要写一个clickMenu进行路由的跳转
  -->

    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <!-- 别把icon后的'-'漏掉了会失去图标 -->
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 侧边栏知识点2：
    利用计算属性来对有chirdren的el-submenu侧边栏进行渲染
    伸展开的属性是通过<el-menu-item-group来进行定义的
  -->
    <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>

      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>



<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>


<script>
// import {mapState} from 'vuex'
import { getMenu } from "@/axios/data.js";
export default {
  data() {
    return {
      menu: [
        // {
        //   path: '/',
        //   name: 'home',
        //   label: '首页',
        //   icon: 's-home',
        //   url: 'home/index'
        // },
        // {
        //   path: '/mall',
        //   name: 'mall',
        //   label: '商品管理',
        //   icon: 'video-play',
        //   url: 'mall/index.vue'
        // },
        // {
        //   path: '/user',
        //   name: 'user',
        //   label: '用户管理',
        //   icon: 'user',
        //   url: 'User/index'
        // },
        // {
        //   label: '其他',
        //   icon: 'location',
        //   children: [
        //     {
        //       path: '/page1',
        //       name: 'page1',
        //       label: '页面1',
        //       icon: 'setting',
        //       url: 'Other/PageOne.vue'
        //     },
        //     {
        //       path: '/page2',
        //       name: 'page2',
        //       label: '页面2',
        //       icon: 'setting',
        //       url: 'Other/PageTwo.vue'
        //     }
        //   ]
        // }

        //侧边栏数据
        // {
        //   path: "/token",
        //   name: "token",

        //   meta: { role: "editor" },
        //   role: "editor",
        //   label: "用户管理",
        //   icon: "user",
        // },
        // {
        //   path: "/hello2",
        //   name: "HelloWorld2",

        //   meta: { role: "admin" },
        //   label: "HelloWorld2",
        //   icon: "video-play",
        // },
        // {
        //   path: "/aside_Test",
        //   name: "aside_Test",

        //   meta: { role: "editor" },
        //   label: "侧边栏",
        //   icon: "s-home",
        // },
        // {
        //   label: "其他",
        //   icon: "location",
        //   children: [
        //     {
        //       path: "/",
        //       name: "HelloWorld",

        //       meta: { role: "admin" },
        //       label: "页面1",
        //       icon: "setting",
        //     },
        //     {
        //       path: "/echart",
        //       name: "echart",

        //       meta: { role: "admin" },
        //       label: "页面2",
        //       icon: "setting",
        //     },
        //   ],
        // },
      ],
    };
  },
  mounted(){
    getMenu().then((res) => {
          console.log(res);
          this.menu=res.data
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    
    clickMenu(item) {
      console.log(item);
      this.$router.push(item.path);
      //  多写了一个$
      // this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    //这里的方法循环可以直接v-for 进行循环
    noChildren() {
      //如果没有子项目就拿到他的chirdren
      return this.menu.filter((item) => !item.children);
      // return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      //如果有子项目就拿到他的chirdren
      //return this.menu.filter((item) => !item.children);
      return this.menu.filter((item) => item.children);
    },
    // ...mapState({
    //   // count, // 这种就是count:"count", 的简写
    //   // count1: "count1",
    //   // repeatCount: "count2", // 当组件中与vuex中的字符已经出现重复时，使用 repeatCount 来映射 store.state.count2
    //   isCollapse: (state) => { // 映射 count3 为 store.state.conut3的值
    //     return state.test.isCollapse
    //   },
    //   // helloName: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
    //   //   return this.hello + state.name
    //   // },
    //   // addNumber: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
    //   //   return this.number + state.count
    //   // }
    // }),

    // isCollapse() {
    //   return this.$store.state.test.isCollapse;
    // },
    asyncMenu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>