// import path from 'path'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: [path.resolve(SRC_PATH, 'index.jsx')],
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  //html-webpack-plugin插件 会自动生成一个html文件
  plugins: [new HtmlWebpackPlugin({title: 'React-tutorial-es2015'})],

  //webpack-dev-server 配置
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 8888
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style', 'css'
        ], //注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader
        include: SRC_PATH
      }, {
        test: /\.js[x]?$/,
        loader: 'babel',
        include: SRC_PATH,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
