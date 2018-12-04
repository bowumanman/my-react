import React from 'react';
class Child extends React.Component{
	componentWillReceiveProps(np) {
		console.log(np, 'np');
	}
	shouldComponentUpdate(props, state) {
		console.log(props, state);
		return false
	}

	render() {
		console.log('this is child');
		return (
			<div>this is Child</div>
		)
	}
}
export default Child;