### 自动生成HTML

* 安装插件
```
npm install html-webpack-plugin --save-dev
```
* 修改配置文件使用插件

```
const htmlWebpackPlugin = require('html-webpack-plugin')


plugins:[
    new htmlWebpackPlugin({
        template:'./src/view/index.html',//模板文件
        inject:'head'//脚本写在那个标签里,默认是true(在body结束后)
        hash:true//给生成的js/css文件添加一个唯一的hash
    })
]
```





