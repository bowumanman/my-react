import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import Service from '@/service';
const styles = require('./index.scss');
const FormItem = Form.Item;
class LoaginForm extends React.Component{
	state = {
		res: {}
	};
	componentDidMount() {
		localStorage.removeItem('Us');
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				const params = {
					username: values.userName,
					password: values.password
				};
				const res = await Service.login(params);
				this.setState({
					res
				});
				return;  
				// message.success('登录成功~');
				// localStorage.setItem('Us', values.userName);
				// this.props.history.push('/home');
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
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
							rules: [{ required: true, message: '请输入密码!' }],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
						)}
					</FormItem>
					<FormItem className="align-center">
						<Button type="primary" htmlType="submit" className={styles.loginBtn}>
							登录
						</Button>
						<p className={styles.tip}><span className="cfff">没有账户？ </span><Link to="/register">立即注册</Link></p>
					</FormItem>
				</Form>
			</div>
		);
	}
}
export default Form.create()(LoaginForm);