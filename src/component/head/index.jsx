import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
const styles = require('./index.scss');
class Head extends React.Component{
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
				<div className="pull-right" >
					<Icon type="user" />
					<span className="m-r-10 m-l-10">李四</span>
					<Link to="login">退出</Link>
				</div>
			</div>
		);
	}
}
export default Head;