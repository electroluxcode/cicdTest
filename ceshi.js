

//分析打包大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'disabled', // 每次构建时自动打开server  手动打开 disabled
                generateStatsFile: true, // 是否生成stats.json文件
                statsOptions: { source: false },
            }),
        ],
    }
}