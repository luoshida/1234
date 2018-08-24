

import React, { Component } from 'react';

import './login.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
	constructor(props){
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit (e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
		    console.log('Received values of form: ', values);
		  }
		});
	}

 	render() {
	    const { getFieldDecorator } = this.props.form;
	    return (
	    	<div className='login'>
		      <Form className="login-form">
		        <FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: '请输入用户名' }],
		            rules: [{ pattern: /^[0-9|a-z]{3,6}$/, message: '请输入3~6位字符' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '请输入密码' }],
		            rules: [{ pattern: /^[0-9|a-z]{3,6}$/, message: '请输入3~6位字符' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
		          )}
		        </FormItem>
		        <FormItem>
		          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
		           登录
		          </Button>
		          
		        </FormItem>
		      </Form>
	    	</div>
	    );
  	}
}


export default Form.create()(NormalLoginForm);