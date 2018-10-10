/*
 * @Author: yanghognxuan
 * @Date: 2018-10-09 11:41:05
 * @LastEditors: yanghognxuan
 * @LastEditTime: 2018-10-10 10:50:41
 * @Description: cli 配置
 */
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const env = process.env.NODE_ENV

function resolve(dir) {
  return path.join(__dirname, dir)
}
/**
 * vue inspect > output.js 调试配置
 * https://cli.vuejs.org/zh/guide/webpack.html#%E5%AE%A1%E6%9F%A5%E9%A1%B9%E7%9B%AE%E7%9A%84-webpack-%E9%85%8D%E7%BD%AE
 */
module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    // 是否开启 CSS source map？
    sourceMap: env !== 'production',
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: 'http://localhost:8080',
    proxy: 'http://172.31.242.152:8080' // 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://172.28.50.78:8081。
  },
  // 人口文件
  pages: {
    index: { // pc
      entry: 'src/page/pc',
      template: 'public/pc.html',
      filename: 'index.html',
      chunks: ['vendor', 'runtime', 'index']
    }
  },
  lintOnSave: true,
  chainWebpack: config => {
    /**
     *https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     *Prefetch 链接将会消耗带宽。如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。
     */
    config.plugins.delete('prefetch-index')
    // 修改它的选项...
    function handleSetloader(rule, loader, addres) { // 修改loader
      config.module
        .rule(rule)
        .use(loader)
        .loader(loader)
        .tap(options => {
          options.limit = 10000
          options.name = addres + '/[name].[hash:4].[ext]'
          return options
        })
      if (rule !== 'fonts') { // fonts 不用压缩
        config.module
          .rule(rule)
          .use('image-webpack-loader')
          .loader('image-webpack-loader')
          .options({
            quality: '65-80'
          })
          .end()
      }
    }
    handleSetloader('images', 'url-loader', 'img')
    handleSetloader('svg', 'file-loader', 'img')
    handleSetloader('fonts', 'url-loader', 'fonts')

    // 全局scss 函数注入
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    function addStyleResource(rule) {
      rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/mixin.scss')
        ]
      })
    }
    config.module
      .rule('eslint')
      .test(/\.(vue|(j|t)sx?)$/)
      .use('eslint')
      .loader('eslint-loader')
      .options({
        fix: true
      })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/styles'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
  },
  configureWebpack: config => {
    if (env === 'production') {
      // 为生产环境修改配置
      config.optimization = {
        // webpack4 提取JS
        // nodeEnv: 'production',
        // minimize: true,
        concatenateModules: true,
        runtimeChunk: {
          name: 'runtime'
        },
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: false,
          cacheGroups: {
            default: false,
            vendor: {
              name: 'vendor',
              chunks: 'all',
              priority: 1,
              test: /[\\/]node_modules[\\/]/
            },
            vant: {
              test: /vant/, // 直接使用 test 来做路径匹配
              chunks: 'all',
              name: 'vant',
              priority: 10,
              enforce: true
            }
          }
        }
      }
      config.plugins.push(
        new webpack.HashedModuleIdsPlugin(),
        new BundleAnalyzerPlugin(), // 打包分析
        new CompressionWebpackPlugin({
          // gz
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  }
}
