//webpack 3.11.
'use strict'

const path = require('path');

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {

  context: path.resolve(__dirname, '../'),
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, '../src/app.js')
    ]
  },

  output: {
    path: '/dist',
    filename: '[name].bundle.js',
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? config.build.assetsPublicPath
    //   : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.json']
  },

  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        use:[
          {loader: 'babel-loader'},
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //   }
      // },
      // {
      //   test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('media/[name].[hash:7].[ext]')
      //   }
      // },
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      //   }
      // }
    ]
  }

}



