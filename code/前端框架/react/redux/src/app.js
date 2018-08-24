

import React, { Component } from 'react';

import {  Row, Col, Input,Button,List } from 'antd';

import './app.css';

import AppUi from './appUi.js';

import Store from './store/index.js';

import { CHANGEVALUE, CHANGELIST, DELLIST, getInit } from './store/actionCreater.js';

class App extends Component {
	constructor(props){
		super(props);

		this.handleInput=this.handleInput.bind(this);
		this.handleClick=this.handleClick.bind(this);

		this.state=Store.getState();
		//当store里面的state发送改变时执行subscribe里面的函数
		Store.subscribe(()=>{	
			this.setState(Store.getState())
		})
	}
	componentDidMount(){
		let action = getInit();
		Store.dispatch(action);
	}
	handleInput(e){
		let action = CHANGEVALUE(e.target.value);
		Store.dispatch(action);
	}

	handleClick(){
		let action = CHANGELIST();
		Store.dispatch(action);
	}

	handleDel(index){
		let action = DELLIST(index);
		Store.dispatch(action);
	}
	render() {
		return (
			<AppUi 
				value={this.state.value}
				list={this.state.list}
				handleInput={this.handleInput}
				handleClick={this.handleClick}
				handleDel={this.handleDel}
			/>
		)
	}
}

export default App;