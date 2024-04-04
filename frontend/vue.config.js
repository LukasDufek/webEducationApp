const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer:{
    proxy: {
      '/api' :{
        target: 'http://localhost:5000'
      }
    }


  },
  chainWebpack: config => {
    config.module
        .rule('raw')
        .test(/\.txt$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
  },
}
