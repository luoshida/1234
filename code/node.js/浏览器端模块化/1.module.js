let obj ={'name':'tom'};

let str='im str';



module.exports = {
	obj:{'name':'tom'},
	str:'im str'
}
module.exports.obj2={'12':'45'};

//当使用函数的方法给module.exports赋值的时候会在堆里面添加一个新内存这时候
// exports的指针和module.exports的指针指向不同的内存用赋值的方法在exports
// 上赋值就不会生效

// exports.obj=obj;
// exports.fn=fn;
// exports.str=str;
// exports.json=json;


