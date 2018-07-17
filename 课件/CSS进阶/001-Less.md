### Less介绍
Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

### Less编译
* 浏览器
```javascript
    <!--
    1. 引入.less文件,注意rel="stylesheet/less"
    2. 在less文件后面引入编译less的js文件,可以从http://lesscss.cn/中下载
    -->
    <link rel="stylesheet/less" type="text/css" href="less/001.less">
    <script src="js/less.js" type="text/javascript"></script>
```

* 客户端

> http://koala-app.com/

* 服务端

### Less语法
* 注释
```css
//我是注释一 编译被删除
/*我是注释二 编译被保留*/
```
* 变量
@变量名:值

* 混合(Mixin)

> * 基本混合,直接把选择器写在另外一个选择中
> * 带参数
> * 带参数有默认值 

* 匹配模式
选择符合条件的混合模式,根据传入的参数来决定使用哪个混合

* 嵌套
在选择器中嵌套选择器

* 运算 
+-*/

* 避免编译
属性:~'css的值'

* !important关键字
在混合模式后添加!important关键字,会为混合模式中的所有样式添加!important

*混合参数做为属性和设置计算后的属性值

.set(@attr,@val){
    @{attr}:unit(@val/10,px);
}

