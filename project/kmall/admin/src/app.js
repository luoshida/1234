

import React, { Component } from 'react';

import './app.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import TodoList from './pages/todolist/index.js'; 
import Login from './pages/login/index.js'; 

class App extends Component {
	
	render() {
		return (
			<Router>
				<div>
					<Route path='/login' component={ Login } />
				</div>
			</Router>
		)
	}
}

export default App;