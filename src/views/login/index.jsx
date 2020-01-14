import React from 'react';
import { Icon, Input, Button, message, Form, Spin } from 'antd';
import { Link } from 'react-router-dom';
import Service from '@/service/common';
import { connect } from 'react-redux';
import action from '@/action/index';
import { withRouter } from 'react-router-dom';
const styles = require('./index.scss');
@withRouter
class Login extends React.Component{
	state = {
		res: {}
	};
	componentDidMount() {
		
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				const params = {
					loginName: values.userName,
					password: values.password
				};
				this.props.showLoading();
				const {resCode, data} = await Service.login(params);
				this.props.hideLoading();
				if (resCode === '0') {
					message.success('登录成功~');
					this.props.setUserInfo(data);
					this.props.history.push('/home');
				}
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const {globalLoading} = this.props.store;
		return (
			<Spin spinning={globalLoading} tip="努力加载中...">
				<div className={`${styles.bg} loginForm`}>
					<Form onSubmit={this.handleSubmit} className={styles.form} layout="vertical">
						<h3 className={styles.title}>数据录入系统</h3>
						<Form.Item label="用户名">
							{getFieldDecorator('userName', {
								rules: [{ required: true, message: '请输入用户名!' }],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
							)}
						</Form.Item>
						<Form.Item label="密码">
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
							)}
						</Form.Item>
						<Form.Item className="align-center">
							<Button type="primary" htmlType="submit" className={styles.loginBtn}>
								登录
							</Button>
							<p className={styles.tip}><span className="cfff">没有账户？ </span><Link to="/register">立即注册</Link></p>
						</Form.Item>
					</Form>
				</div>
			</Spin>
		);
	}
}
const LoginForm = Form.create()(Login);
const mapStateToProps = (store) => {
	return {
		store
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		showLoading: () => dispatch(action.showLoading()),
		hideLoading: () => dispatch(action.hideLoading()),
		setUserInfo: (userInfo) => dispatch(action.setUserInfo(userInfo)),
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));