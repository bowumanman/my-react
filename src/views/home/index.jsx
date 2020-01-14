import React from 'react';
import homeService from '@/service/home';
import { connect } from 'react-redux';
class Page extends React.Component{
	state = {
		name: ''
	};
	componentDidMount() {
		// this.getData();
		console.log(this.props);
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
const mapStateToProps = (store) => {
	return {
		store
	};
};
export default connect(mapStateToProps)(Page);