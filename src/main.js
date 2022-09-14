import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false
import service from '@/axios/request'
// service 挂载到Vue原型上面
import * as valiate from '@/utils/valiate'
import store from '@/store'

// 封装ui
import * as element from '@/plugins/element.js'
import * as bootstrap from '@/plugins/bootstrap.js'




Vue.prototype.$valiate = valiate;

Vue.prototype.$service = service;
// 全局配置项
window.vm=new Vue({
  bootstrap,
  element,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
