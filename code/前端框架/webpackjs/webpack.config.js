const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  //一个入口
  // entry: './src/index.js', 
  // entry: {main:'./src/index.js'}, 
  //多个入口
  entry: {
  	main:'./src/page/main/index.js',
  	index:'./src/page/index/index.js'
  }, 
  //一个出口
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  //多个出口
  output: {
    // filename: '[name].bundle.js',
    filename: '[name].[hash].bundle.js',
    // filename: '[name].[chunkhash].bundle.js',
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
      }
    ]
  },
  plugins:[
  	new HtmlWebpackPlugin({
	  	template:'./src/view/index.html',
	  	filename:'index.html',
	  	title:'test'
	  }),
	new CleanWebpackPlugin(['dist'])
  ],
  devServer:{
  	contentBase:'./dist'
  }
};