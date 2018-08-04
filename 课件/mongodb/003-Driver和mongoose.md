### NodeJs Driver
http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/

* mongodb NodeJs Driver 安装

* CRUD 体验

### mongoose 基本使用

* mongoose 安装

* CRUD 体验

> 连接DB
> 定义Schema
> 用Schema生成Model

* CRUD 进阶

> *  新增
>> * Model.insertMany()
>> * Model.prototype.save()
>> * Model.create()

> * 查找
>> * Model.find()
>> * Model.findById()
>> * Model.findOne()

> * 更新
>> * Model.update()
>> * Model.updateMany()
>> * Model.updateOne()

> * 删除
>> * Model.remove()
>> * Model.deleteOne()
>> * Model.deleteMany()

> * 获取去重后的值
>> * Model.distinct()

* Schema 定义文档的模型

> * 常见定义类型
>> * String
>> * Number
>> * Date
>> * Boolean
>> * ObjectId(mongoose.Schema.Types.ObjectId)
>> * Array
> * 注意点
>> * 在存储和更新数据时,如果数据的类型和定义字段的类型不一致,mongoose内部会尝试将数据转换为定义的字段类型,如果转换失败则操作失败
>> * 定义类型的方法有两种,一种是直接用类型,另一种是用一个对象,类型是对象type属性的值 
>> * MongoDB存储的是格林尼治标准时间(GMT时间),和们的时区错8个小时,存储时会减去8小时
>> * 通常我从数据库中取出的时间需要做格式化,可以借助 moment 包来格式化时间
>> * MongoDB会自动添加ObjectId的id,如果字段类型是ObjectId,插入时会把字符串转化为ObjectId

> * 验证
>> * 内置验证
>>> * 所有的类型都有required(必须)验证 
>>> * Number类型有min(最小)和max(最大)值验证
>>> * String有enum(枚举),maxlength(最大长度)和minlength(最小长度)验证.
>> * 每一个验证都可以写为: 规则:[值,错误消息]的格式,也可以写为:规则:值
>> * 自定义验证举例
```javascript
        validate:{
            validator:function(v){
                return /1[358]\d{9}/.test(v)
            },
            message:'{VALUE} 不是合法电话号码'
        }
```

> * 方法
>> * 自定义实例方法举例

```javascript
//注意不要用箭头函数
 UserSchema.methods.findMyBlogs = function(callback){
    // this是 UserModel的一个实例
    // 在Model的原型上有Model.prototype.model()方法,该方法返回一个指定的Model   
    this.model('Blog').find({author:this._id},(err,docs)=>{
        callback(null,docs)
    })
}
```
>> * 自定义模型静态方法举例

```javascript
//注意不要用箭头函数
UserSchema.statics.findByPhone = function(phone,callback){
    //this 是 UserModel
    //Model.model()方法返回一个指定的Model,因此this和this.model('User'))相等    
    this.find({phone:phone},(err,docs)=>{
        callback(null,docs)
    })
}
```

* 关联查询 populate




