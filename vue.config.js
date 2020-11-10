const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/', // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist', // 输出文件目录  默认: 'dist'
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  lintOnSave: false
}
