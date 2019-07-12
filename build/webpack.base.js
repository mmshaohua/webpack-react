const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 入口
  entry: path.resolve( __dirname, '../src/index.js'),

  // 出口
  output: {
    path: path.resolve( __dirname, '../dist'),
    filename: '[name][hash].js'
  },

  module: {
    // loader 规则
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {  // 处理 .jpg|png|gif 文件
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                limit: 2048, // 2M 以下的文件转换 base64
                name: "[name][hash].[ext]",
                outputPath: './img'
            }
          }
        ]
      },
      { // 处理 .(eot|svg|ttf|woff|woff2 文件
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
              name: '[name][path].[ext]',
              outputPath: './iconfont'
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),

    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public')
    }])
  ],

  resolve: {
    alias: { // 配置别名
      '@': path.resolve(__dirname, '../src')
    },

    // 省略文件的拓展名
    extensions: ['.js', '.json', '.scss', '.css']
  }
}