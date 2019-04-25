const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {

  entry: {
    app: "./src/js/app.js"
  },

  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].js"
  },

  module: {

    rules: [
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }

    ]
    
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: 'src/', to: './../', ignore:['app.js', '*.vue'] }
    ])
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};