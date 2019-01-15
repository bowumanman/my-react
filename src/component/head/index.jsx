import React from 'react';
import { Icon } from 'antd';
const styles = require('./index.scss');
export default class Head extends React.Component{
	state = {
		open: true
	}
	changeOpen = () => {
		const { open } = this.state;
		this.setState({
			open: !open
		});
		this.props.onChangeOpen(!open);
	}
	render() {
		const { open } = this.state;
		const { menuPosition, isMobel, visible } = this.props;
		if (menuPosition === 'top') {
			return this.props.children;
		}
		return (
			<div className={styles.head} >
				<Icon type={isMobel ? (visible ? 'menu-fold' : 'menu-unfold') : open ? 'menu-fold' : 'menu-unfold'} onClick={this.changeOpen} className={styles.control} />
			</div>
		);
	}
}