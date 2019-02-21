import { apiHttp } from './apiHttp';
const api = {
    LOGIN: {url: '/oauth/oauth/token', method: 'get'},
};

export default {
    login: async (params) => {
        const res = await apiHttp(api.LOGIN, params);
        return res;
    }
};


