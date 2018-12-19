import React from 'react';
class Child extends React.Component{
	componentWillReceiveProps(np) {
	}
	shouldComponentUpdate(props, state) {
		return false;
	}

	render() {
		return (
			<div>this is Child</div>
		);
	}
}
export default Child;