
import React, { Component } from 'react';
import { Form, Select } from 'antd';
import { REQUIRE } from 'util';
import {SALEMOUNT_LOAD} from 'api'

const Option = Select.Option;

class NormalLoginForm extends Component {
	constructor(props){
		super(props);
		this.state = {
		    FirstListData:[],
		    FirstListId:'',
		    SecendListData:[],
		    SecendListId:'',
		};
	
		this.handleFirstListChange=this.handleFirstListChange.bind(this);
		
		this.handleSecendListChange=this.handleSecendListChange.bind(this);
		this.getListId=this.getListId.bind(this);
	}
	componentDidMount(){
		// if (this.props.parentCategoryId) {
		// 	this.setState({
		// 	    FirstListId:this.props.parentCategoryId,
		// 	    SecendListId:this.props.categoryId,
		// 	})
		// }else if(this.props.parentCategoryId=='0'){
		// 	this.setState({
		// 	    FirstListId:this.props.categoryId,
		// 	})
		// }
		this.handleLoadFirstList()
		
		
	}
	handleLoadFirstList () {
		REQUIRE({
			url:SALEMOUNT_LOAD,
			data:{
				page:1,
				pid:0,
			}
		})
		.then((data)=>{
			// console.log(data.dataSource);
			this.setState({
				FirstListData:data.dataSource,
			})
		})
	}
	handleFirstListChange(value){
		// console.log(value);
		this.setState({
			FirstListId:value,
		    SecendListData:[],
		    SecendListId:'',
		},()=>{this.handleLoadSecendList(value);this.getListId()})
		
	}
	handleLoadSecendList (value) {
		REQUIRE({
			url:SALEMOUNT_LOAD,
			data:{
				page:1,
				pid:value,
			}
		})
		.then((data)=>{			
			this.setState({
				SecendListData:data.dataSource,
			})
		}) 
	}
	handleSecendListChange(value){
		this.setState({
			SecendListId:value,
		},()=>{this.getListId()})
	}
	getListId(){
		if (this.state.SecendListId) {
			this.props.getId(this.state.FirstListId,this.state.SecendListId)
		}else{
			this.props.getId(0,this.state.FirstListId)
		}
		
	}
	render() {
		
		
		
		const {FirstListData,FirstListId,SecendListData,SecendListId}=this.state;
		const FirstListOptions = FirstListData.map(
			a => <Option key={a._id} value={a._id}>{a.name}</Option>
		);
		const SecendListOptions = SecendListData.map(b => <Option key={b._id} value={b._id}>{b.name}</Option>);
		return (
      		  SecendListOptions.length ?  <div>
      			<Select 
      				defaultValue={FirstListId} 
			        value={FirstListId}		            
		            style={{ width: 200 }} 
		            onChange={this.handleFirstListChange}
	            >
		          {FirstListOptions}
		        </Select>
		        <Select 
			        defaultValue={SecendListId} 
			        value={SecendListId}
			        style={{ width: 200 }} 
			        onChange={this.handleSecendListChange}
			    >
		          {SecendListOptions}
		        </Select>
		       </div> :  <div>
      			<Select 
      				defaultValue={SecendListId} 
			        value={SecendListId}			   		            
		            style={{ width: 200 }} 
		            onChange={this.handleFirstListChange}
	            >
		          {FirstListOptions}
		        </Select>
		        </div>	
		)
	}
}

const ProductSelect = Form.create()(NormalLoginForm);
export default ProductSelect;