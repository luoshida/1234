### 什么是HTTP
HTTP(HyperText Transfer Protocol)超文本传输协议

### 什么是协议
协议就是一套规则，用来规范/约束某一类事物
例如租房协议/买卖协议/离婚协议
HTTP协议就是用来规范客户端(浏览器)和服务端通信规则的

> 常见的网络协议还有很多，如
> * FTP(File Transfer Protocol)文件传输协议
> * POP3(Post Office Protocol Version 3)邮局协议-版本3
> * SMTP(Simple Mail Transfer Protocol)简单邮件传送协议
> * TCP/IP(Transmission Control Protocol/Internet Protocol)传输控制协议/Internet协议 

### 什么是HTTPS
HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer）,安全套接字层超文本传输协议HTTPS。为了数据传输的安全，HTTPS在HTTP的基础上加入了SSL协议，SSL依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密。

### OSI(Open System Interconnection)开放式系统互联的七层架构
* 1 物理层(设备之间的比特流传输,物理接口)
* 2 数据链路层(成帧,用MAC地址访问媒介)
* 3 网络层(写入IP地址(数据源和数据目标的地址),选路) 
* 4 传输层(确定是用TCP协议传输还是UDP协议传输)

> * 传输控制协议TCP可靠但是慢
> * 用户数据协议UDP不可靠但是快 

* 5 会话层(安全协议,目录访问协议)
* 6 表示层(转码/解码,加密/解密) 
* 7 应用层(提供应用数据,各种应用协议,如HTTP,FTP,SMTP...)

> 发送从应用层开始向下传输,接受从物理层开始向上传输

### TCP/IP 4层模型
* 网络接口层(对应7层中的物理层和数据链路层)
* 网际互联层(对应7层中的网络层)
* 传输层(对应7层中的传输层)
* 应用层(对应7层中的应用层,表示层和会话层) 

### 访问页面流程详解
* 客户在浏览器输入网址或者刷新页面
* 域名解析(以http://www.kuazhu.com/为例) 
    1 浏览器搜索自身的DNS缓存
        查看浏览器缓存 chrome://net-internals/#dns
    2 如果浏览器缓存没有或者过期，就去操作系统自身的DNS缓存查找
    3 读取本地的HOST文件
        windows：C:\Windows\System32\drivers\etc
        OS:/etc/hosts
    4 向宽带运营商服务器发起域名解析请求,宽带运营商服务器查看自身的缓存
    5 运营商服务器发起一个迭代的DNS解析请求
        5.1 找根域的服务器
        5.2 根域服务器里面有com域的地址,根域让去找com域的服务器
        5.3 com域服务器里面有kuazhu.com域的IP地址,com域服务器让去找kuazhu.com域的服务器
        5.4 kuazhu.com域的服务器(一般是域名注册商)里面有对应的IP地址和域名的映射,找到后将IP地址发给运营商服务器
        5.5 运营商服务器把结果返回给客户操作系统,同时操作系统将其缓存起来,
            操作系统把结果返回给浏览器

* 浏览器获取IP地址后,发起TCP/IP 三次握手

    第一次握手：客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
    
    第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；
    
    第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。
    
    完成三次握手，客户端与服务器开始传送数据
    
* TCP/IP连接建立后，开始发送HTTP请求
    浏览器发送请求行到服务器(请求行包括请求方法 uri 协议/版本等)
    浏览器发送请求头到服务器,结束后发送一个空白行告诉服务器不再有请求头(请求头包含许多有关的客户端环境信息)
    浏览器发送请求体到服务器(请求体主要是请求参数)

    服务器应答处理并且返回响应行(响应行包括协议/版本 状态码 状态消息)
    服务器返回响应头,结束后发送一个空白行告诉客户端不再有响应头(响应头包含许多有关的服务端环境信息)
    服务器返回响应体(响应体主要是返回的数据)

    关闭TCP连接

* 浏览器渲染服务器返回的内容

* HTTP一旦请求完成,连接就会断开,因此连接是没有记忆的,无状态的

### 在浏览器中看请求响应的信息-Timing

Queued at 
添加到处理队列的时间

Started at
开始处理的时间

Stalled 浏览器要发出请求到这个请求可以发出的等待时间，一般是代理协商、以及等待可复用的TCP连接释放的时间，不包括DNS查询、建立TCP连接等时间等

DNS Lookup 
执行DNS查找时间

Initial connection
建立TCP连接的时间，就相当于客户端从发请求开始到TCP握手结束这一段，包括DNS查询+Proxy时间+TCP握手时间。

Request sent:请求的第一个字节发出前到最后一个字节发出后的时间

Waiting：请求发出后到收到响应的第一个字节所耗费的时间，包括数据的传输和服务器对请求的处理时间

Content Download:收到响应的第一个字节开始到收到响应的最后一字节结束所耗费的时间

### HTTP的请求方法
GET方法
    用于获取数据
    请求是参数的大小有限制(400k)
    参数以及参数的值会显示在地址栏中，安全性极低
    
POST方法
    用于提交数据(表单的提交)
    请求是参数的大小基本没有限制
    参数不会显示在地址栏中，相对安全

### 什么是URL?
uniform resource locator 统一资源定位器
可以理解为地址栏中的网址

### URL的格式
完整格式：https://www.kuazhu.com:443/courseList

协议://域名:端口号/资源文件

### 常见状态码
1xx-信息提示
100 - 继续。 
101 - 切换协议。
2xx - 成功 
这类状态代码表明服务器成功地接受了客户端请求。 
200 - 确定。客户端请求已成功。 
201 - 已创建。 
202 - 已接受。 
203 - 非权威性信息。 
204 - 无内容。 
205 - 重置内容。 
206 - 部分内容。 
207 - 多状态 (WebDAV)。 
3xx - 重定向 
客户端浏览器必须采取更多操作来实现请求。例如，浏览器可能不得不请求服务器上的不同的页面，或通过代理服务器重复该请求。 
301 - 已永久移动 
302 - 对象已移动。 
304 - 未修改。 
307 - 临时重定向。
4xx - 客户端错误 
发生错误，客户端似乎有问题。例如，客户端请求不存在的页面，客户端未提供有效的身份验证信息。 
400 - 错误的请求。 
401 - 访问被拒绝。IIS 定义了几个不同的 401 错误，用于指示更为具体的错误原因。这些具体的错误代码在浏览器中显示，但不在 IIS 日志中显示： 
401.1 - 登录失败。 
401.2 - 服务器配置导致登录失败。 
401.3 - 由于 ACL 对资源的限制而未获得授权。 
401.4 - 筛选器授权失败。 
401.5 - ISAPI/CGI 应用程序授权失败。 
401.7 – 由 Web 服务器上的 URL 验证策略拒绝访问。这个错误代码为 IIS 6.0 所专用。 
403 - 禁止访问：IIS 定义了几个不同的 403 错误，用于指示更为具体的错误原因： 
403.1 - 执行访问被禁止。 
403.2 - 读访问被禁止。 
403.3 - 写访问被禁止。 
403.4 - 要求 SSL。 
403.5 - 要求 SSL 128。 
403.6 - IP 地址被拒绝。 
403.7 - 要求客户端证书。 
403.8 - 站点访问被拒绝。 
403.9 - 用户数过多。 
403.10 - 配置无效。 
403.11 - 密码更改。 
403.12 - 拒绝访问映射表。 
403.13 - 客户端证书被吊销。 
403.14 - 拒绝目录列表。 
403.15 - 超出客户端访问许可。 
403.16 - 客户端证书不受信任或无效。 
403.17 - 客户端证书已过期或尚未生效。 
403.18 - 在当前的应用程序池中不能执行所请求的 URL。这个错误代码为 IIS 6.0 所专用。 
403.19 - 不能为这个应用程序池中的客户端执行 CGI。这个错误代码为 IIS 6.0 所专用。 
403.20 - Passport 登录失败。这个错误代码为 IIS 6.0 所专用。 
404 - 未找到。 
404.0 -（无） – 没有找到文件或目录。 
404.1 - 无法通过请求的端口访问网站。 
404.2 - Web 服务扩展锁定策略阻止本请求。 
404.3 - MIME 映射策略阻止了此请求。 
405 - 用来访问本页面的 HTTP 谓词不被允许（方法不被允许） 
406 - 客户端浏览器不接受所请求页面的 MIME 类型。 
407 - 要求进行代理身份验证。 
412 - 前提条件失败。 
413 – 请求实体太大。 
414 - 请求 URI 太长。 
415 – 不支持的媒体类型。 
416 – 无法满足请求的范围。 
417 – 执行失败。 
423 – 锁定的错误。
5xx - 服务器错误 
服务器由于遇到错误而不能完成该请求。 
500 - 内部服务器错误。 
500.12 - 应用程序正忙于在 Web 服务器上重新启动。 
500.13 - Web 服务器太忙。 
500.15 - 不允许直接请求 Global.asa。 
500.16 – UNC 授权凭据不正确。这个错误代码为 IIS 6.0 所专用。 
500.18 – 无法打开 URL 授权存储库。这个错误代码为 IIS 6.0 所专用。 
500.19 - 此文件的数据在元数据库中配置不正确。 
500.100 - 内部 ASP 错误。 
501 - 页眉值指定了未实现的配置。 
502 - Web 服务器用作网关或代理服务器时收到了无效响应。 
502.1 - CGI 应用程序超时。 
502.2 - CGI 应用程序出错。 
503 - 服务不可用。这个错误代码为 IIS 6.0 所专用。 
504 - 网关超时。 
505 - HTTP 版本不受支持。