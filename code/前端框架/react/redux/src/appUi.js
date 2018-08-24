import React, { Component } from 'react';

import {  Row, Col, Input,Button,List } from 'antd';

/*
class AppUi extends Component {
	render() {
		return (
			<div className='box'>
				<Row>
			      <Col span={10}>
			      	<Input value={ this.props.value } onChange={ this.props.handleInput } />
			      </Col>
			      <Col span={2}>
			      	<Button type="primary" onClick={ this.props.handleClick }>增加</Button>
			      </Col>
			    </Row>

			    <Col span={10}>
				    <List style={{ marginTop:'10px' }}
				      bordered
				      dataSource={this.props.list}
				      renderItem={(item, index) => (<List.Item onClick={ ()=>{this.props.handleDel(index)} }>{item}</List.Item>)}
				    />
			    </Col>
			</div>
		)
	}
};*/

//ui组件 负责ui展示
//如果一个组件只有render的方法，也叫无状态组件
//无状态组件可以只写一个方法
const AppUi = (props)=>{
	return (
		<div className='box'>
			<Row>
		      <Col span={10}>
		      	<Input value={ props.value } onChange={ props.handleInput } />
		      </Col>
		      <Col span={2}>
		      	<Button type="primary" onClick={ props.handleClick }>增加</Button>
		      </Col>
		    </Row>

		    <Col span={10}>
			    <List style={{ marginTop:'10px' }}
			      bordered
			      dataSource={props.list}
			      renderItem={(item, index) => (<List.Item onClick={ ()=>{props.handleDel(index)} }>{item}</List.Item>)}
			    />
		    </Col>
		</div>
	)
}

export default AppUi;