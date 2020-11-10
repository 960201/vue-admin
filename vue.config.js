const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/', // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist', // 输出文件目录  默认: 'dist'
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  lintOnSave: false,
  css: {
    extract: IS_PROD, // 是否使用css分离插件 ExtractTextPlugin。注：开发环境下如果为true，.vue文件样式失去-热更新
    sourceMap: false, // 开启 CSS source maps?
    // CSS 预处理器配置项
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/styles/variables.scss";
        @import "@/styles/mixin.scss";
        @import "@/styles/function.scss";
        `
      }
    }
    // requireModuleExtension: false, // 如果你想去掉文件名中的 .module
    // modules: false // 启用 CSS modules for all css / pre-processor files.
  }
}
