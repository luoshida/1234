### 虚拟DOM
虚拟DOM其实就是一个用来描述DOM节点的JS对象

1. state 数据
2. JSX 模板
3. 数据 + 模板 -> 真实DOM
4. 生成原始虚拟DOM
5. state 数据变化
6. 数据 + 模板 -> 新的虚拟DOM
7. 比较原始虚拟DOM和新的虚拟DOM,找出区别(diff算法)
8. 直接操作DOM改变有区别的DOM

### 获取DOM
* 在dom元素上添加ref属性,例如:

ref = {(input)=>{this.input = input}}

> 注意点:由于setState是一个异步方法,如果需要获取最新的Dom,需要写在setState方法的第二个回调函数中


