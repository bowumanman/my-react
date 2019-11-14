import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Input, Button, Typography } from 'antd';
const style = require('./index.scss');
const { Paragraph } = Typography;
@inject('userStore')
@observer
class Page extends React.Component{
	@observable name = 1;
	@observable sex = '';
	@observable arr = [1, 2, 3];
	@observable obj1 = {name: 'jake'};
	@observable obj2 = {name: 'jake'};
	change = () => {
		this.name = this.name + 1;
	}
	onInputName = (e) => {
		this.props.userStore.changeUserName(e.target.value);
	}
	changeName = () => {
		this.props.userStore.changeUserName('li si');
	}
	render() {
		const {userName} = this.props.userStore;
		return (
			<div>
				<div className={style.item}>
					<p>this is {this.props.location.pathname}</p>
					<Input placeholder="请输入姓名" value={userName} onInput={this.onInputName} />
					<Button onClick={this.changeName}>点击修改名字</Button>
					<p><Button onClick={this.change}>点击加1</Button>当前点击数{this.name}</p>
				</div>
				<div className={style.item}>
					<div className={style.t} />
					<span>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
						Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
						a design language for background applications, is refined by Ant UED Team.</span>
				</div>
				<div className={style.item}>
					<Paragraph ellipsis={{ rows: 3, expandable: true }}>
					如下图，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示如下图，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示，如下图，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示，如下图，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示，如下图222222，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示如下图，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示，如下图，再次进入审核页面时，审核下拉框默认显示当前的审核结果，请设计为再次进入审核页面时下拉框默认为“请选择”且有必填提示
					</Paragraph>
					<div className={style.item}>
						<span className={`${style.spanT} ${style.span}`} />
						<span className={`${style.spanB} ${style.span}`} />
						<span className={`${style.spanL} ${style.span}`} />
						<span className={`${style.spanR} ${style.span}`} />
					</div>
				</div>
			</div>
		);
	}
}
export default Page;