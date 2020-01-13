import React from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import './assets/css/index.scss';
import { Layout } from './component';
// import routes from './routes';
import routes from './routes/routers';
import Login from './views/login';
import Register from './views/register';

const Us = localStorage.getItem('Us');
const Routers = () => (
		<HashRouter>
			<Switch>
				<Route path="/login" component={Login} exact />
				<Route path="/register" component={Register} />
				<Layout>
					<Switch>
						{
							routes.map((item, index) => {
								return <Route {...item} key={index} />;
							})
						}
						{
							Us ? <Redirect to="/home" /> : <Redirect to="/login" />
						}
					</Switch>
				</Layout>
				<Redirect to="/login" />
			</Switch>
		</HashRouter>
);
const App = () => (
	<Routers />
);
export default App;