

import React, { Component } from 'react';

import './app.css';

//处理路由的组件
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route,
  Link,
//switch组件，从上到下匹配，匹配一个下面就不会匹配
  Switch,
  Redirect
} from 'react-router-dom';

import TodoList from './pages/todolist/index.js'; 
class A extends Component{
	render(){
		return (
			<div>
				comA{/* 一个组件的传参的方式 this.props.match.params.xxx*/}
				<Switch>
				{/* exact 精准的匹配，不符合就不会被匹配*/}
					<Route exact path="/A" render={()=>(<h3>我是大A</h3>)} />
	     			
	    			<Route path="/A/B" render={()=>(<h3>我是A的B</h3>)} />
	    		
	    		{/* 传参的方式 Route.match.params.xxx*/}
	    			<Route path="/A/:id" render={(Route)=>(<h3>我是A的id {Route.match.params.id}</h3>)} />	
				</Switch>
			</div>
		)
	}
}
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			islogon:false
		}
	}
	render() {
		//自定义路由 判断状态显示相应的页面 Redirect自动跳转
		const ProtectedRoute = ({component:Component,...rest})=>(
			<Route {...rest} render={
				props=>(this.state.islogon) ? 
				(<Component {...props} />) :
				(<Redirect to='/login' />)
			} />)
		return (
			<Router>
				<div>
					<ul>
						<li><Link to='/A'> toA </Link></li>
						<li><Link to='/A/123'> toA的ID </Link></li>
						<li><Link to='/A/B'> toA的B </Link></li>
						<li><Link to='/C'> toC </Link></li>
						<li><Link to='/todolist'> TodoList </Link></li>
					</ul>

					<Route path='/todolist' component={ TodoList }/>
					<ProtectedRoute path='/A' component={ A } />
					<Route path='/C' render={()=>(<h1>我是C</h1>)} />
					<Route path='/login' render={()=>(<h1>点我登录</h1>)} />
					
				</div>
			</Router>
		)
	}
}

export default App;