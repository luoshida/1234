const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode:'development',

  entry: {main:'./src/index.js'},  

  output: {
  
    filename: 'bundle.js',
    publicPath:'/',
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
            //配置ES6扩展 babel
            presets: ['env','es2015','react','stage-3'],
            //antd按需加载
            plugins: [
              ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
            ]
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
  	contentBase:'./dist',
    port:3001,
    historyApiFallback:true
  }
};