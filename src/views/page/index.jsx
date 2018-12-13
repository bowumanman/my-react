import React from 'react';
const style = require('./index.scss');
class Page extends React.Component{
	render() {
		return (
			<div className={style.item}>this is page</div>
		)
	}
}
export default Page;