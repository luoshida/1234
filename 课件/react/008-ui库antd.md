* 安装 
npm install antd --save

* 基本使用
import {  DatePicker } from 'antd';
import 'antd/dist/antd.css';

* 按需加载

> 安装babel-plugin-import

npm install --save-dev babel-plugin-import

> 修改webpack.confing.js文件的babel-loader option,添加

```
plugins: [
            ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
        ]
```                        

