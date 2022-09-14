// main.js里面import store from './store'
// 调用的话就 
//   this.$store.dispatch("user/login", this.loginForm)
// console.log(this.$store.state.user);
// console.log(this.$store.state.admin);
//   this.$store.dispatch("user/actionVuex")
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 这段代码可以检索里面的文件 ./app.js
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  // set './app.js.map' => 'app'
  // $1 获取第一个里面的值
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 这里拿到组件实例
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// console.log("s")
// console.log(modules)
const store = new Vuex.Store({
  modules,
 
})

export default store