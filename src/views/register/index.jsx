import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
const styles = require('../login/index.scss');
const FormItem = Form.Item;
class RegisterForm extends React.Component{
	state = {
		loading: false
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
			this.setState({
				loading: true
			});
			setTimeout(() => {
				this.setState({
					loading: false
				});
				message.success('注册成功~');
			}, 2000);
			setTimeout(() => {
				this.props.history.push('/login');
			}, 4000);
		  }
		});
	}
	validatorPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value.length < 6) {
			callback('密码必须超过6位');
		} else {
			form.validateFields(['passwordAgain'], { force: true });
		}
		callback();
	}
	validatorPasswordAgain = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次密码不一致');
		}
		callback();
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const { loading } = this.state;
		return (
			<div className={`${styles.bg} loginForm`}>
				<Form onSubmit={this.handleSubmit} className={styles.form} layout="vertical">
					<h3 className={styles.title}>数据录入系统</h3>
					<FormItem label="用户名">
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: '请输入用户名!' }],
						})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
						)}
					</FormItem>
					<FormItem label="密码">
						{getFieldDecorator('password', {
							rules: [{ required: true, message: '请输入密码!' }, {
								validator: this.validatorPassword
							}],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
						)}
					</FormItem>
					<FormItem label="确认密码">
						{getFieldDecorator('passwordAgain', {
							rules: [{ required: true, message: '请输入确认密码!' }, {
								validator: this.validatorPasswordAgain
							}],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="确认密码" />
						)}
					</FormItem>
					<FormItem className="align-center">
						<Button type="primary" htmlType="submit" loading={loading} className={styles.loginBtn}>
							立即注册
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}
export default Form.create()(RegisterForm);