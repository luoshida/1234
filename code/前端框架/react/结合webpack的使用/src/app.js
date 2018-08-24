

import React, { Component,Fragment } from 'react';

import './App.css';
import App1 from './app1'; 

//发送Ajax的插件
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      list:[]
    };
    this.handleInput=this.handleInput.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleDelte=this.handleDelte.bind(this);
  }

//计算state值 返回一个新的应用级state，多用于如果props有变化,需要更新state的场景
	// static getDerivedStateFromProps(nextProps, prevState){
	// 	console.log('app Mounting getDerivedStateFromProps',nextProps, prevState);
	// 	return {list:['aa','dd']}
	// }



// 组件挂载完毕执行,多用于发送ajax获取数据
	componentDidMount(){
		console.log('app Mounting componentDidMount')
		// axios
		// .get('http://127.0.0.1:3000/api/getData')
		// .then((data)=>{
		// 	this.setState({
		// 		list:data.data
		// 	})
		// })
		// .catch((e)=>{

		// })
	}


// 更新Updating(state或者props发生改变)

	// static getDerivedStateFromProps(props, state){
	// 	console.log('app update getDerivedStateFromProps',props, state);
	// 	return 123
	// }

//该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数
	shouldComponentUpdate(nextProps, nextState){
		console.log('app update shouldComponentUpdate',nextProps, nextState)
		return true
	}

// render()

//该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中的snapshot使用
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('app update getSnapshotBeforeUpdate',prevProps, prevState);
		return 123
	}

//组件更新完成后执行
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('app update componentDidUpdate',prevProps, prevState,snapshot)
	}




//卸载Unmounting(组件从页面中删除)
//卸载组件之前执行的函数
	componentWillUnmount(){
		console.log('app Unmounting componentWillUnmount')
	}


  handleClick(){
  	/*
  	this.setState({
  		list:[...this.state.list,this.state.value],
  		value:''
  	})*/
  	this.setState((preState)=>({
  		list:[...preState.list,preState.value],
  		value:''
  	}));
  }
  handleInput(e){
  	/*
  	this.setState({
  		value:e.target.value
  	})*/
  	
  	// const value = e.target.value;
  	const value = this.input.value;
  	this.setState(()=>({
  		value
  	}))
  }
  handleDelte(index){
  	/*
  	let list = [...this.state.list];
  	list.splice(index,1);
  	this.setState({
  		list:list
  	})*/
  	this.setState((preState)=>{
  		const list = [...preState.list];
  		list.splice(index,1);
  		return {
  			list
  		};
  	})
  }
  getApp1(){
	return 	this.state.list.map((value,index)=>{
				return (
					<App1 
						handleD={this.handleDelte}
						content={value} 
						key={index} 
						index={index} 
					/>
				)
			})
  }
  render() {
    return (
    	<div className='box'>
			<input  onChange={ this.handleInput } ref={(input)=>{this.input=input}} />
			<button  style={{ color:'red'}} onClick={ this.handleClick } >点击</button>
			<ul ref={(ul)=>{this.ul=ul}}>
				{/*单标签div换成Fragment也行*/}
				{/*{this.state.list.map((value,index)=>{
					return <li 
								key={index} 
								onClick={ this.handleDelte.bind(this,index) }>
							{ value }
							</li>
				})}*/}

				{/*{this.state.list.map((value,index)=>{
					return (
						<App1 
							handleD={this.handleDelte}
							content={value} 
							key={index} 
							index={index} 
						/>
					)
				})}*/}
				
				{this.getApp1()}
			</ul>
		</div>
    );
  }
}

export default App;