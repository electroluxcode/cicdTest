import path from 'path'
const files = require.context('@/components', false, /\.vue$/) 
const modules = {}
// 组件导入
files.keys().forEach((key) => {
  const name = path.basename(key, '.vue') 
  /**
   * path.basename获取vue文件名，也可以用正则表达式匹配
   * key.replace(/^\.\/(.*)\.\w+$/, '$1')
   **/
  modules[name] = files(key).default || files(key)
})
console.log(modules)
export default {
  name: 'test',
  components: modules,
}

