### PropTypes和DefaultProps

* PropTypes 定义父组件传入子组件数据的校验规则

> 注意点:
>> * 先引入,react会默认安装prop-types,所以无需安装
>> import PropTypes from 'prop-types'; 

```javascript
Item.propTypes = {
    content:PropTypes.string,
    index:PropTypes.number,
    handleDelete:PropTypes.func,
    test:PropTypes.string.isRequired
}

Item.defaultProps = {
    test:'Hello'
}
```

* DefaultProps 定义子组件中的默认值

* https://reactjs.org/docs/typechecking-with-proptypes.html

### props state 和 render的关系

* 当组件的state或者props发生改变时render函数会重新执行
* 当父组件的render函数执行时,子组件的render函数也会被执行




