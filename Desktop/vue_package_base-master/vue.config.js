const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
//js压缩
const TerserPlugin = require("terser-webpack-plugin");
//分析打包大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// var proEnv = require('./src/config/pro.env'); // 生产环境
// var testEnv = require('./src/config/test.env'); // 测试环境
// var devEnv = require('./src/config/dev.env'); // 本地环境

const env = process.env.NODE_ENV;//当前环境
// let URL_RSP = '';//路径
// let URL_IM = '';//路径
// 默认是本地环境
if (env === 'production') { // 生产环境
  console.log("----------生产环境----------");
  // URL_RSP = proEnv.URL_RSP;
  // URL_IM = proEnv.URL_IM;
} else if (env === 'test') { // 测试环境
  console.log("----------测试环境----------");
  // URL_RSP = testEnv.URL_RSP;
  // URL_IM = testEnv.URL_IM;
} else { // 开发环境
  console.log("----------开发环境----------");
  // URL_RSP = devEnv.URL_RSP;
  // URL_IM = devEnv.URL_IM;
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",


  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "/" },
        changeOrigin: true,
      },

    },

  },
  chainWebpack: config => {
    //知识点1：添加入口
    config.entryPoints.clear() // 会把默认的入口清空
    config.entry('main').add('./src/main.js')//新增入口
    // config.entry('routes').add('./src/app-routes.js')//新增入口

    //知识点2：设置alias
    // 如果我们在工程中直接用alias，例如  <img src="_/img/logo.png" alt="">会找不到目录
    // 我们只需要在引用路径的字符串最前面添加上 ~ 符号，例如 <img src="~_/img/logo.png" alt="">
    config.resolve.alias
      .set('_', resolve('src/webpackTest'))

    // .delete('base') // 删掉指定的别名
    // .clear()  会把所有别名都删掉

    //知识点3：我们都说在打包的时候不要生成source map，
    // 那么source amp的作用

    // 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，
    // 而其中一个源文件包含一个错误，
    // 那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。
    // 为了更容易地追踪错误和警告，JavaScript 提供了 source map 

    //知识点4：修改代理的proxy,这玩意上线后代理会消失
    // 如果要做代理还是好好的在后端配置,config.devServer.port(8888)可以自动打开这个端口
    // config.devServer.port(8888)
    //   .open(true)
    //   .proxy({
    //     '/api': {
    //       target: 'http://123.57.153.106:8080/',
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/dev': ''
    //       }
    //     }
    //   })

    //知识点5：插件的添加，这里还要看一下
    // // 5.1添加API
    // const fileManager = require("filemanager-webpack-plugin");
    //注意：use部分，不能使用new的方式创建插件实例
    // webpackConfig.plugin("zip").use(fileManager, [
    //   {
    //     onEnd: {
    //       archive: [
    //         {
    //           source: "dist",
    //           destination: zipName
    //         }
    //       ]
    //     }
    //   }
    // ]);

    // 5.2修改插件参数// 一个例子 //使用tag修改参数
    // config.plugin('env').tag(args => [...args, 'SECRET_KEY']);

    // 5.3移除 preload 插件
    // config.plugins.delete('preload');

    // 5.4在xx插件前调用/在xx插件之后调用 ScriptExtWebpackPlugin插件在HtmlWebpackTemplate插件前调用
    // config.plugin('html-template').use(HtmlWebpackTemplate).end().plugin('script-ext').use(ScriptExtWebpackPlugin).before('html-template');
    // html-template在script-ext之后调用
    // config.plugin('html-template').after('script-ext').use(HtmlWebpackTemplate).end().plugin('script-ext').use(ScriptExtWebpackPlugin);

    // optimizations 优化器
    // config.optimization({chunkIds: 'named'})

    //知识点6：用when做条件
    // config
    //   .when(process.env.NODE_ENV === 'production',
    //     config => config.plugin('minify').use(BabiliWebpackPlugin),
    //     config => config.devtool('source-map')
    //   );


    //  知识点9：代码压缩，使用terser来缩小/最小化你的 JavaScript。 1.首先npm install terser-webpack-plugin --save-dev  2.然后const TerserPlugin = require("terser-webpack-plugin"); 引入代码就好了
    // 对于大多数 JavaScript 来说，空格去除和符号修饰占缩小代码大小的 95%
    //原理
    // 异步注册 compilation.hooks.optimizeChunkAssets
    // 在回调中调用 plugin 实例的 optimise 方法
    // 并行模式：创建 Worker（jest） 进行多进程编译
    // minify 过程调用 terser 库对代码进行处理
    // config.optimization.minimizer([new TerserPlugin({
    //   terserOptions: {
    //     mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
    //     compress: {
    //       drop_console: true,//传true就是干掉所有的console.*这些函数的调用.
    //       drop_debugger: true, //干掉那些debugger;
    //       pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
    //     }
    //   }
    // })])



  },
  

  // webpack 相关的配置需要写到 configureWebpack 如果直接
  configureWebpack: {
    plugins:[
      new BundleAnalyzerPlugin({
           analyzerMode: 'disabled', // 每次构建时自动打开server  手动打开 disabled
           generateStatsFile: true, // 是否生成stats.json文件
           statsOptions: { source: false },
         }),
   ],
    cache: {
      type: 'filesystem',
      allowCollectingMemory: true,
    },
    entry: {
      // app: './src/index.js',
      // print: './src/print.js'
    },
    // devtool: 'inline-source-map',

    // 知识点7：性能提示
    performance: {
      // hints: "error"     // 超过250kb 的资源 我们掏出错误
      maxAssetSize: 250000 //最大250000 bytes
    },
    // 知识点8：优化器
    optimization: {
      chunkIds: 'named', //1.named选择块 ID 时的算法在编译之间不会更改的短数字 ID。 // 2.'deterministic'选择快 编译的时候默认使用适合长期缓存。生产模式默认启用。 
      //对应着chain模块就是   config.optimization.splitChunks({})  只有splitChunks:里面的参数可以被引用
      splitChunks: {
        // runtimeChunk: "single",  //单独打包，小文件还挺好用的
        chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
        minSize: 30000, // 最小尺寸，30000 超过30K才独立分包
        minChunks: 1, // 最小 chunk ，默认1
        maxAsyncRequests: 5, // 最大异步请求数， 默认5
        maxInitialRequests: 3, // 最大初始化请求书，默认3
        automaticNameDelimiter: '-',// 打包分隔符
        name: function () { }, // 打包后的名称，此选项可接收 function

        cacheGroups: { // 这里开始设置缓存的 chunks
          priority: false, // 缓存组优先级
          vendor: { // key 为entry中定义的 入口名称
            chunks: "initial", // 必须三选一： "initial"  仅打包同步引用的依赖 | "all" 打包所有的依赖 | "async" 仅打包异步引用的依赖
            test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
            name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
            minSize: 30000,
            minChunks: 1,  //最小被引用
            enforce: true,
            maxAsyncRequests: 5, // 最大异步请求数， 默认1
            maxInitialRequests: 3, // 最大初始化请求书，默认1
            reuseExistingChunk: true // 可设置是否重用该chunk
          },
          elementUI: {
            name: "chunk-elementUI",
            priority: 30,
            // test: /[\/]node_modules[\/]_?element-ui(.*)/,
          }
        }
      },
      //  知识点9：代码压缩，使用terser来缩小/最小化你的 JavaScript。 1.首先npm install terser-webpack-plugin --save-dev  2.然后const TerserPlugin = require("terser-webpack-plugin"); 引入代码就好了
      // 对于大多数 JavaScript 来说，空格去除和符号修饰占缩小代码大小的 95%
      //原理
      // 异步注册 compilation.hooks.optimizeChunkAssets
      // 在回调中调用 plugin 实例的 optimise 方法
      // 并行模式：创建 Worker（jest） 进行多进程编译
      // minify 过程调用 terser 库对代码进行处理

      minimize: true,
      minimizer: [new TerserPlugin({
          terserOptions: {
            mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
            compress: {
              drop_console: true,//传true就是干掉所有的console.*这些函数的调用.
              drop_debugger: true, //干掉那些debugger;
              pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
            }
          }
        })],

    },
    //知识点10：添加loader
    module: {
      rules: [
        {
          test: /\.graphql$/,
          use: [
            {
              loader: "graphql-tag/loader"
            }
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "swc-loader",
            options: {
              parseMap: true,
            }
          },

        },
        {
          test: /\.js$/,
          use: [
            {
              loader: "thread-loader",
              options: {
                workers: 8,
              },
            },
          ],
        },
      ],

    }

    //知识点11：我们可以通过插件来改变环境变量 process.env.NODE_ENV 
    //  1.npm install npm install --save-dev cross-env
    //  2. package.json中配置 cross-env NODE_ENV=production vue-cli-service serve
    // 3.我们在vue.config.js 中console.log(process.env.NODE_ENV, "当前的环境")

    //  chainWebpack添加loader
    // config.module
    // .rule('graphql')
    // .test(/\.graphql$/)
    // .use('graphql-tag/loader')
    //   .loader('graphql-tag/loader')
    //   .end()

    //  chainWebpack修改loader
    // chainWebpack: config => {
    //   config.module
    //     .rule('vue')
    //     .use('vue-loader')
    //       .loader('vue-loader')
    //       .tap(options => {
    //         // 修改它的选项...
    //         return options
    //       })
    // }
  },
  
};
