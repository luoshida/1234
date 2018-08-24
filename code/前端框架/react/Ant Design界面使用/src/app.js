

import React, { Component } from 'react';

import {  Row, Col, Input,Button,List } from 'antd';

// 按需加载不需要引入样式
//npm install babel-plugin-import --save-dev
// import 'antd/dist/antd.css';
import './app.css';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class App extends Component {
 
  render() {
    return (
    	<div className='box'>
    		 <Row>
		      <Col span={8}>
		      	<Input />
		      </Col>
		      <Col span={2}>
		      	<Button type="primary">增加</Button>
		      </Col>
		    </Row>

		    <Col span={10}>
			    <List style={{ marginTop:'10px' }}
			      bordered
			      dataSource={data}
			      renderItem={item => (<List.Item>{item}</List.Item>)}
			    />
		    </Col>
		</div>
    )
  }
}

export default App;