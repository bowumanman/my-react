import React from 'react';
import { Menu, Icon } from 'antd';
import Router from '../../routes';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const styles = require('./index.scss');
export default class Head extends React.Component{
	state={
		openKeys: [],
		collapsed: false
	}
	onOpenChange = (list) => {
		const lastOpenKey = [list[list.length - 1]];
		this.setState({
			openKeys: lastOpenKey
		});
	}
	render() {
		const { openKeys } = this.state;
		const { mode } = this.props;
		return (
			<div className={mode === 'horizontal' ? styles.inline : ''}>
				<div className={styles.login}>LOGO</div>
				<Menu
					mode={mode}
					theme="dark"
					openKeys={openKeys}
					onOpenChange={this.onOpenChange}
				>
					{
					Router.map((menu, index) => {
						if (menu.child && menu.child.length > 0) { // 可展开
						return (
							<SubMenu key={index} title={<span><Icon type={menu.icon} /><span>{menu.title}</span></span>}>
							{
								menu.child.map((sMenu, j) => {
								return <Menu.Item key={sMenu.path}><Link to={sMenu.path}>{sMenu.title}</Link></Menu.Item>;
								})
							}
							</SubMenu>
						);
						} else { // 不可展开
						return <Menu.Item key={menu.path}><Icon type={menu.icon} /><span><Link to={menu.path}>{menu.title}</Link></span></Menu.Item>;
						}
					})
					}
				</Menu>
			</div>	
		);
	}
}