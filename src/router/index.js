
import Vue from 'vue'
import { routes, token_routes } from './xxx'
import Router from 'vue-router'
import { testget, kuayu } from '@/axios/data'
Vue.use(Router)

//addroutes:动态把路由挂载上去
const router = new Router({
  mode: 'history',
  routes: routes
})
// kuayu().then((res) => {
//   console.log(res)


// })
// testget().then((res) => {
//   console.log(res.data.data.roles)
//   let commonUser = res.data.data.roles
//   let commonUserRoute = token_routes.filter(function (page) {
//     return commonUser.includes(page.meta.role)
//   })
//   router.addRoutes(commonUserRoute)

// })

testget
kuayu
token_routes

//动态控制路由方法
// let commonUser=['admin']
// let commonUserRoute=token_routes.filter(function(page){
//     return commonUser.includes(page.meta.role)
// })
// router.addRoutes(commonUserRoute)


//路由前置守卫相关操作
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = to.meta.img;
  }
  next();
})
export default router