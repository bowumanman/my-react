import React from 'react';
const style = require('./index.scss');
class Page extends React.Component{
	render() {
		return (
			<div className={style.item}>this is {this.props.location.pathname}</div>
		);
	}
}
export default Page;