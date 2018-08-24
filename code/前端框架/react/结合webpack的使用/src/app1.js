import React, { Component } from 'react';

// 传入参数的校验的插件
import PropTypes from 'prop-types';
class App1 extends Component{

	constructor(props) {
		super(props);
		this.handleDelte=this.handleDelte.bind(this)
	}
	

// 挂载Mounting(组件被第一次添加到页面上)

// constructor(props)

//计算state值 返回一个新的应用级state，多用于如果props有变化,需要更新state的场景
	// static getDerivedStateFromProps(nextProps, prevState){
	// 	console.log('app1 Mounting getDerivedStateFromProps',nextProps, prevState)
	// 	return null;
	// }

// render()

// 组件挂载完毕执行,多用于发送ajax获取数据
	componentDidMount(){
		console.log('app1 Mounting componentDidMount')
	}




// 更新Updating(state或者props发生改变)

	// static getDerivedStateFromProps(props, state){
	// 	console.log('app1 update getDerivedStateFromProps',props, state)
	// }

//该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数
	shouldComponentUpdate(nextProps, nextState){
		console.log('app1 update shouldComponentUpdate',nextProps, nextState);
		if (nextProps.content != this.props.content) {
			return true;
		}else{
			return false;
		}
	}

// render()

//该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('app1 update getSnapshotBeforeUpdate',prevProps, prevState)
		return 3
	}

//组件更新完成后执行
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('app1 update componentDidUpdate',prevProps, prevState,snapshot)
	}




//卸载Unmounting(组件从页面中删除)
//卸载组件之前执行的函数
	componentWillUnmount(){
		console.log('app1 Unmounting componentWillUnmount')
	}



	handleDelte(){
		// this.props.handleD(this.props.index);
		const { handleD,index } = this.props;
		handleD(index);
	}

	render(){
		console.log('app1 render');
		/*
		return (
			<li onClick={this.handleDelete}>
				{this.props.content}
			</li>
		)*/
		const { content } = this.props;
		return (
			<li onClick={this.handleDelte}>
				{content}
			</li>
		)
	}
}

//传入参数的校验 错误也会运行 但会报错
App1.propTypes = {
	content:PropTypes.string,
	index:PropTypes.number,
	handleD:PropTypes.func.isRequired,
	nav:PropTypes.number
}
export default App1;
