### 服务器
安装了Web服务器软件的电脑就可以提供管理网站的服务,我们称之为Web服务器。
常见的Web服务器软件有:Apache,IIS,Tomcat,Nginx,NodeJs等

### NodeJs 初识
* 官网 https://nodejs.org/ 下载安装,注意要下载LTS版本的
* NodeJs安装完成后,去终端用node -v 查看,如果有版本号说明安装成功
* 如果node命令找不到,Windows的用户注意环境变量的配置
* NodeJs安装的同时会安装npm(node package manager)

### ajax请求流程：
* 客户端创建一个ajax对象
* 用ajax对象和服务端建立连接
* 用ajax对象发送请求到服务端
* 用ajax对象接收服务端返回的数据

```javascript
function ajax(method,url,data,fnSucc,fnFaild){
        // 1.创建一个ajax对象
        var oAjax = new XMLHttpRequest();
        //post方法处理
        if(method.toLowerCase() == 'post'){
                oAjax.open(method,url,true);
                oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                oAjax.send(data);               
        }else{
                if(data){
                        url = url+"?"+data;
                }
                // 2.用ajax对象建立连接
                // oAjax.open(请求方法，请求地址，是否异步)                
                oAjax.open(method,url,true);
                // 3.用ajax对象发送请求                
                oAjax.send();
        }
        // 4.用ajax对象接收数据
        oAjax.onreadystatechange = function(){
                // console.log(oAjax.readyState);
                // 0 还没有初始化
                // 1 已经初始化，但是还没有调用open方法
                // 2 send方法已经调用
                // 3 返回了部分数据
                // 4 数据完全返回
                if(oAjax.readyState == 4){//请求完成，表明所有的数据已经返回，但并不代表成功
                        if(oAjax.status == 200){//成功
                                fnSucc(oAjax.responseText);
                        }else{//失败
                                if(fnFaild){
                                        fnFaild(oAjax.status);
                                }       
                        }
                }
        }
}
```