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
    //入口js文件的名字和对应的路径
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
     //输出的js为js文件夹下的index.js,main.js
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
//入口html的路径
	  	template:'./src/view/index.html',
 //输出HTML的名字
	  	filename:'index.html',
	  	title:'test',
//引用js的名字
      chunks:['index']
	  }),
	new CleanWebpackPlugin(['dist'])
  ],
  devServer:{
  	contentBase:'./dist'
  }
};