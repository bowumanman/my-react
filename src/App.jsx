import React from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import './assets/css/index.scss';
import Layout from './views/layout';
import routes from './routes';
import Login from './views/login';
const Routers = () => (
	<HashRouter>
		<Switch>
			<Route key="login" path="/login" component={Login} />
			<Route key="register" path="/register" component={Login} />
			{
				routes.map((item, index) => {
					return <Layout key={index}><Route {...item} /></Layout>;
				})
			}
			<Redirect key="*" from="*" to="/login" />
		</Switch>
	</HashRouter>
);
const App = () => (
	<Routers />
);
export default App;