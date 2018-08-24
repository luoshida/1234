

import React, { Component } from 'react';

import {  Row, Col, Input,Button,List } from 'antd';

import './app.css';

import { connect } from 'react-redux';



import { CHANGEVALUE, CHANGELIST, DELLIST, getInit } from './store/actionCreater.js';

class App extends Component {
	componentDidMount(){
		this.props.focuseInit();
	}
	render() {
		return (
			<div className='box'>
				<Row>
			      <Col span={10}>
			      	<Input value={ this.props.value } onChange={ this.props.handleInput } />
			      </Col>
			      <Col span={2}>
			      	<Button type="primary" onClick={this.props.handleClick}>增加</Button>
			      </Col>
			    </Row>

			    <Col span={10}>
				    <List style={{ marginTop:'10px' }}
				      bordered
				      dataSource={this.props.list}
				      renderItem={(item, index) => (<List.Item onClick={()=>{this.props.handleDel(index)}}>{item}</List.Item>)}
				    />
			    </Col>
			</div>
		)
	}
}
//store里面的state映射到组件props上
const mapStateToProps = (state)=>{
	return state
}
const mapDispatchToProps = (storeDispatch)=>{
	return {
		handleInput:(e)=>{
			let action = CHANGEVALUE(e.target.value);
			storeDispatch(action);
		},
		handleClick:()=>{
			let action = CHANGELIST();
			storeDispatch(action);
		},
		handleDel:(index)=>{
			let action = DELLIST(index);
			storeDispatch(action);
		},
		focuseInit:()=>{
			let action = getInit();
			storeDispatch(action);
		}
	}
}

//connect方法是让指定的组件和store连接
export default connect(mapStateToProps,mapDispatchToProps)(App);