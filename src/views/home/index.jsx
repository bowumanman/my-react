import React from 'react';
import Child from '../../component/index';
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
				<input value={name} onChange={this.changeName} />
				<Child name={name} />
			</div>

		);
	}
}
export default Page;