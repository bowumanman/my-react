import React from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import './assets/css/index.scss';
import Layout from './views/layout';
import routes from './routes';
import Login from './views/login';
import Register from './views/register';
const Routers = () => (
	<HashRouter>
		<Switch>
			<Route path="/login" component={Login} exact />
			<Route path="/register" component={Register} />
			<Layout>
				{
					routes.map((item, index) => {
						return <Route {...item} key={index} />;
					})
				}
			</Layout>
			<Redirect to="/login" />
		</Switch>
	</HashRouter>
);
const App = () => (
	<Routers />
);
export default App;