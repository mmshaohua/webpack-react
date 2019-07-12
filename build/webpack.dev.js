const path = require('path')
const common = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    port: 8080,
    open: true,
    stats: 'errors-only'
  }
})