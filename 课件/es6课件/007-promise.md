### Promise的概念
* Promise 是一种异步编程解决方案
* 将异步操作以同步操作的流程表达出来,避免了层层嵌套的回调函数
* Promise对象提供统一的接口,使得控制异步操作更加容易

### Promise的特点
* Promise有三种状态

> * pending（进行中）
> * fulfilled（已成功）
> * rejected（已失败）

* 只有异步操作的结果,可以决定当前是哪一种状态,任何其他操作都无法改变这个状态

* 一旦状态改变,就不会再变

* Promise对象的状态改变，只有两种可能：

>* 从pending变为fulfilled
>* 从pending变为rejected

### Promise的使用
* Promise构造函数接受一个函数作为参数,该函数的两个参数分别是resolve和reject
* resolve函数在异步操作成功时(从pending变为fulfilled)调用,并将异步操作的结果作为参数传递出去
* reject在异步操作失败时(从pending变为rejected)调用,并将异步操作报出的错误作为参数传递出去
* Promise实例生成以后,可以用then方法分别指定resolved状态和rejected状态的回调函数,rejected状态的回调函数可以省略
* Promise 新建后就会立即执行

### Promise对象的方法
* then(resolved状态的回调,rejected状态的回调)

> * then方法返回的是一个新的Promise实例

* catch(回调)

> * 如果异步操作抛出错误,状态就会变为rejected,当then中没有指定rejected状态的回调时就会调用catch方法指定的回调函数 
> * 如果运行中抛出错误,也会被catch方法捕获

* finally(回调)

> * 不管Promise对象最后状态如何,都会执行的操作
> * finally方法的回调函数不接受任何参数 

### Promise静态方法

* Promise.resolve()

> * 如果参数是Promise实例,那么Promise.resolve将不做任何修改、原封不动地返回这个实例 
> * 如果参数是一个具有then方法的对象,resolve方法会将这个对象转为 Promise 对象然后就立即执行该对象的then方法
> * 如果参数参数不是具有then方法的对象,或根本就不是对象,返回一个新的 Promise 对象,状态为resolved
> * 不带有任何参数,直接返回一个resolved状态的 Promise 对象

* Promise.reject()

> * 返回一个新的Promise实例,该实例的状态为rejected,参数会原封不动地作为reject的理由

* Promise.all()

> * 接受一个Promise实例数组作为参数,返回一个新Promise实例
> * 当数组中的所有Promise实例的状态都变成fulfilled时,Promise实例的状态才会变成fulfilled,此时,返回值组成一个数组传递给新Promise实例的回调函数
> * 当数组中有一个Promise实例被rejected,新Promise实例的状态就变成rejected,此时第一个被reject的实例的返回值会传递给新Promise实例的回调函数

* Promise.race()

> * 接受一个Promise实例数组作为参数,返回执行最快的那个promise对象 
