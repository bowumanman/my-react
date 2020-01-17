import React from 'react';
import routes from './index';
import Login from '../views/login';
import Register from '../views/register';
import { Layout } from '../component';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
const router = routes.reduce((total, currentValue, index) => {
	if (currentValue.child && currentValue.child.length !== 0) {
		total = total.concat(currentValue).concat(currentValue.child);
	} else {
		total = total.concat(currentValue);
	}
	return total;
}, []);
const getLayoutRouter = (store) => {
	const requireLogin = (nextState, replace, cb) => {
		const {userInfo: {token}} = store.getState();
		return token;
	};
	return (
		<Switch>
			{
				router.map((r, index) => {
					return (
					<Route path={r.path} exact render={() => 
							requireLogin() ? r.component : <Redirect to="/login"/>
						} key={index}
					/>);
				})
			}
		</Switch>
	);
};
const getAllRoute = (store) => {
	return (
		<HashRouter>
		<Switch>
			<Route path="/login" component={Login} exact />
			<Route path="/register" component={Register} exact />
			<Layout />
		</Switch>
		</HashRouter>
	);
};
export {getAllRoute, getLayoutRouter};
