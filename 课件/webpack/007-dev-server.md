### webpack-dev-server 

> webpack-dev-server提供了一个简单的基于node express的web服务器,能够实时重新加载页面

* 安装
npm install --save-dev webpack-dev-server

* 修改配置文件

  devServer:{
    contentBase: './dist'
  }

* 启动
npx webpack-dev-server

或者修改package.json

  "scripts": {
    "build": "webpack --progress --display-modules --display-reasons --watch",
    "start": "webpack-dev-server --open"
  },

后使用
npm start 启动



