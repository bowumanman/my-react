import React from 'react';
class Page extends React.Component{
	state = {
		name: ''
	};
	changeName = (e) => {
		this.setState({
			name: e.target.value
		});
	};
	render() {
		const { name } = this.state;
		return (
			<div>
				<input value={name} onChange={this.changeName} /> home
			</div>

		);
	}
}
export default Page;