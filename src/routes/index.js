import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import React from 'react';


import Page from '../views/page';
import Home from '../views/home';
const routes = [
	{
		path: '/home',
		component: Home,
	}, {
		path: '/Page',
		component: Page,
	}
];

const Routers = () => (
	<HashRouter>
		<Switch>
			{
				routes.map((item, index) => {
					return <Route {...item} key={index} />
				})
			}
			<Redirect from="*" to="/home" />
		</Switch>
	</HashRouter>
);
console.log(Routers, 'Routers');
const App = () => (
	<Routers/>
);
export default  App;