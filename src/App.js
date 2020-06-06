import React from 'react';
import Auth from './components/container/auth';
import './App.css';
import AddProduct from './components/container/addProduct';
import Table from './components/container/table';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Auth} />
					<Route path='/list' component={Table} />
					<Route path='/add' component={AddProduct} />
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
