### 遍历器
* 遍历器(Iterator)是一种接口,实现了该接口的数据结构就可以完成遍历操作
* 遍历器接口主要供for...of循环来使用,也就是说实现了遍历器接口的数据类型都可以用for...of循环来遍历数据

### Set
* 类似于数组,但值唯一的数据结构

* Set对象的size属性返回Set实例的值的总数

* Set对象的操作方法

> * add(value):添加某个值,返回 Set 结构本身
> * delete(value):删除某个值,返回一个布尔值,表示删除是否成功
> * has(value):返回一个布尔值,表示该值是否为Set的成员
> * clear():清除所有值,没有返回值

* Set对象的遍历方法

> * keys():返回键名的遍历器
> * values():返回键值的遍历器
> * entries():返回键值对的遍历器
> * forEach(function(value,key){}):使用回调函数遍历

* 注意点:

> * Set只有值没有键,所以key和value一样
> * Set的遍历顺序就是插入顺序

### Map
* 类似于对象,但键的范围不限于字符串,各种类型的值(包括对象)都可以当作键的数据结构

* Map对象的size属性返回Map实例的键值对的总数

* Map对象的操作方法

> * set(key,value):设置键名key对应的键值为value，然后返回整个 Map 结构,如果key已经有值，则键值会被更新，否则就新生成该键。
> * get(key):读取key对应的键值，如果找不到key，返回undefined。
> * delete(key):delete方法删除某个键，返回true。如果删除失败，返回false。
> * has(key):has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
> * clear():清除所有键值,没有返回值

* Map对象的遍历方法

> * keys():返回键名的遍历器
> * values():返回键值的遍历器
> * entries():返回键值对的遍历器
> * forEach(function(value,key){}):使用回调函数遍历

* 注意点:

> * Map的遍历顺序就是插入顺序