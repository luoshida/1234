  ### ajax接口
```javascript
$.ajax({
    url:'./data.json', //请求的地址
    type:'GET',//指定请求的方法,默认是GET
    data:{name:'Tom',age:18},//发送到服务器的数据，字符串键值对或者对象
    dataType:'json',//返回数据的类型,可以是xml json script text html,默认是text
    success:function(返回数据,状态信息,jqXHR对象){},//请求成功后的回调函数
    error:function(jqXHR对象,状态信息){},//请求失败后的回调函数
    complete:function(jqXHR对象,状态信息){},//请求完成后的回调函数
    timeout:3000, //设置请求超时的时间,单位为毫秒
    statusCode:{304:function(){},503:function(){}.....}//设置不同状态码的回调函数
    headers:{test:'test'}//设置请求头
})
```

### 接口封装
* $.get(url[,参数][,回调函数][,返回数据类型])//发送GET请求 
* $.post(url[,参数][,回调函数][,返回数据类型]) //发送POST请求
* $.getScript(url[,回调函数]) //获取JS代码
* $.getJSON(url[,回调函数]) //获取JSON数据
* jQuery对象.load(url[,参数][,回调函数]) //将服务器返回的数据加载到jQuery对象的DOM元素中

> 所有的回调函数接收的参数依次为 返回数据,返回状态信息(成功为success 失败为error),jqXHR对象


### 全局配置
* $.ajaxSetup(对象参数) //给所有的ajax请求设置默认的初始化参数

### 全局回调
* $(document).ajaxStart(回调函数),请求开始,未完成其它请求时执行回调函数
* $(document).ajaxSend(回调函数),当有请求发送请求时执行回调函数
* $(document).ajaxSuccess(回调函数),当有请求成功时执行回调函数
* $(document).ajaxError(回调函数),当有请求失败时执行回调函数
* $(document).ajaxComplete(回调函数),当有请求完成时执行回调函数
* $(document).ajaxStop(回调函数),请求结束,所有请求结束时执行回调函数



> 全局回调一般写在ajax请求前面,如果某个ajax不想触发全局事件,可以设置 global:false来取消

### jqXHR对象
* jqXHR对象是浏览器原生XHR对象的一个超集
* 可以通过调用jqXHR对象上的方法来实现连缀调用,常见的方法有:

> * .done(回调函数) 请求成功时执行,回调函数的参数依次为 返回数据,状态信息,jqXHR对象
> * .fail(回调函数) 请求失败时执行,回调函数的参数依次为 jqXHR对象,状态信息
> * .always(回调函数) 无论成功还是失败都执行,如果成功,回调函数的参数和done的一样,如果失败，回调函数的参数和fail的一样
