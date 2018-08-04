// 所有能触发事件的对象都是 EventEmitter 类的实例
const EventEmitter = require('events');
class MyEvent extends EventEmitter{

}
const myEvent = new MyEvent();

//设置能被监听的最大数 超出会执行但会报错
myEvent.setMaxListeners(5);

//在监听事件绑定前触发
// newListener绑定的监听器, 被插入到EventEmitter实例的内部监听器数组时, 该监听器会被添加到其它同名监听器的前面。
myEvent.on('newListener',(eventName,callback)=>{
	console.log('im listener+',eventName,callback);
	//callback就是fn1 fn2 和下面的未命名函数
	callback();
})

let fn1=(val)=>{
	console.log('event1',val)
}
let fn2=(val)=>{
	console.log('event2',val)
}

myEvent.on('myEvent',fn1);
myEvent.addListener('myEvent',fn2);
myEvent.on('myEvent',()=>{
	console.log('event3')
});
myEvent.addListener('myEvent',()=>{
	console.log('event4')
});
myEvent.once('myEvent',(val)=>{
	console.log('event5',val)
})

console.log(myEvent.listeners('myEvent'));

//移除某个事件
myEvent.removeListener('myEvent',fn2);
// myEvent.off('myEvent',fn1);

// myEvent.emit('myEvent');
//'a'是传入的参数
console.log('5555');
myEvent.emit('myEvent','a');
console.log('6666');
