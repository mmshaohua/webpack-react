const common = require('./webpack.base')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',

  plugins: [ new CleanWebpackPlugin() ]
})