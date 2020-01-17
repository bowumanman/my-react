import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/index.scss';
import {getAllRoute} from './routes/routers';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import {PersistGate} from 'redux-persist/lib/integration/react'; // redux本地化处理
import { Spin } from 'antd';
const {globalLoading} = store.getState();
const Routers = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
		<Spin spinning={globalLoading} tip="加载中，请稍后...">
			{getAllRoute(store)}
		</Spin>	
		</PersistGate>
	</Provider>	
);
const App = () => (
	<Routers />
);
export default App;