import React from 'react';
import homeService from '@/service/home';
class Page extends React.Component{
	state = {
		name: ''
	};
	componentDidMount() {
		this.getData();
	}
	getData = async () => {
		await homeService.getData();
	}
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