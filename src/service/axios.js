import axios from 'axios';
import baseURL from './base-url';
import { message } from 'antd';
import api from './common/api';
import history from '@/routes/history';
import store from '../store';
const ax = axios.create({ baseURL });
ax.defaults.timeout = 5000;
// 添加拦截器
ax.interceptors.request.use(config => {
    const token = store.getState().userInfo.token;
    if (!config.url.includes(api.API_LOGIN)) {
        config.headers['X-Token'] = token;
    }
    return config;
});
// 响应拦截器
ax.interceptors.response.use(response => {
    const { data } = response;
    if (response.status === 200 && data.resCode && data.resCode === '0') {
        return data;
    } else {
        if (data.resCode === '-13') {
            message.error(data.resMsg);
            history.push('/login');
            return;
        }
        message.error(data.resMsg);
        return data;   
    }
}, err => {
    if (err && err.response) {
        let msg = '';
        switch(err.response.status) {
            case 400:
                msg = err.response.statusText;
                break;
            case 401:
                msg = '登陆过期，请重新登陆';
                break;
            case 403:
                msg = '无权限访问当前资源';
                break;
            case 404:
                msg = '请求地址出错';
                break;
            case 405:
                msg = '不被允许的访问方法';
                break;
            case 408:
                msg = '请求超时';
                break;
            case 500:
                msg = '服务器内部错误';
                break;
            case 501:
                msg = '服务未实现';
                break;
            case 502:
                msg = '网关错误';
                break;
            case 503:
                msg = '服务不可用';
                break;
            case 504:
                msg = '网关超时';
                break;
            case 505:
                msg = 'HTTP版本不受支持';
                break;
            default: 
                msg = '';    
        }
        message.error(msg);    
    }
});
export default ax;


