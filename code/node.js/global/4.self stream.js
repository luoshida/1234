const EventEmitter = require('events');
class MyEmitter extends EventEmitter{
	constructor(data,num){
		super();
		this.data = data;
		this.num = num;
		this.index=0;
		this.on('newListener',(eventName)=>{
			if (eventName=='data') {
				setImmediate(()=>{
					this.read();

				})
			}
		})	
	}
	read(){
		let nowLength=0;
		let totalLength = this.data.length;
		while(nowLength< totalLength){
			
			nowLength = this.num+this.index*this.num;
			let arr = this.data.slice(this.index*this.num,nowLength);
			let val =Buffer.from(arr);
			this.emit('data',val);
			this.index++;
			// console.log(this.index);
		} 
	}
}
let data = '1111122222'
let event = new MyEmitter(data,5);
event.on('data',(data)=>{
	console.log(data);
})
event.on('end',()=>{
	console.log('end..');
})