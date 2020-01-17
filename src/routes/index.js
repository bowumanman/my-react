import React from 'react';
import Page from '../views/page';
import Home from '../views/home';

const routes = [
	{
		path: '/home',
		icon: 'dashboard',
		title: '控制台',
		menu: true,
		child: [],
		component: <Home />,
	}, {
		path: '/form',
		icon: 'form',
		title: '表单页',
		menu: true,
		child: [
			{
				path: '/base-form',
				title: '基础表单',
				menu: true,
				child: [],
				component: <Page />,
			}, {
				path: '/spread-form',
				title: '分布表单',
				menu: true,
				child: [],
				component: <Page />,
			}, {
				path: '/senior-form',
				title: '高级表单',
				menu: true,
				child: [],
				component: <Page />,
			}
		]
	}, {
		path: '/table',
		icon: 'table',
		title: '列表页',
		menu: true,
		child: [
			{
				path: '/base-list',
				title: '基础列表',
				child: [{
					path: '/base-list-detail',
					icon: 'table',
					title: '基础列表详情页',
					menu: true,
					component: <Page />
				}],
				component: <Page />,
			}, {
				path: '/table-list',
				title: '查询表格',
				menu: true,
				child: [],
				component: <Page />,
			}, {
				path: '/card-list',
				title: '卡片列表',
				menu: true,
				child: [],
				component: <Page />,
			}, {
				path: '/search-list',
				title: '搜索列表',
				menu: true,
				child: [],
				component: <Page />,
			}
		]
	}, {
		path: '/personal-center',
		icon: 'user',
		title: '个人信息',
		menu: true,
		child: [],
		component: Home,
	}, 
];

export default routes;