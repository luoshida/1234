const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode:'development',

  entry: {main:'./src/index.js'},  

  output: {
  
    filename: 'bundle.js',

    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader','css-loader']
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:['url-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['env', 'react']
          }
        }
      }
    ]
  },
  plugins:[
  	new HtmlWebpackPlugin({
	  	template:'./src/index.html',
	  	filename:'index.html',
	  	title:'test'
	  }),
	new CleanWebpackPlugin(['dist'])
  ],
  devServer:{
  	contentBase:'./dist'
  }
};