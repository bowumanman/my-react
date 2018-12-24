import Page from '../views/page';
import Home from '../views/home';
const routes = [
	{
		path: '/home',
		icon: 'dashboard',
		title: '控制台',
		child: [],
		component: Home,
	}, {
		// path: '/event',
		icon: 'form',
		title: '表单页',
		child: [
			{
				path: '/base-form',
				title: '基础表单',
				child: [],
				component: Page,
			}, {
				path: '/spread-form',
				title: '分布表单',
				child: [],
				component: Page,
			}, {
				path: '/senior-form',
				title: '高级表单',
				child: [],
				component: Page,
			}
		]
	}, {
		// path: '/event',
		icon: 'table',
		title: '列表页',
		child: [
			{
				path: '/base-list',
				title: '基础列表',
				child: [],
				component: Page,
			}, {
				path: '/table-list',
				title: '查询表格',
				child: [],
				component: Page,
			}, {
				path: '/card-list',
				title: '卡片列表',
				child: [],
				component: Page,
			}, {
				path: '/search-list',
				title: '搜索列表',
				child: [],
				component: Page,
			}
		]
	}, 
];


export default routes;