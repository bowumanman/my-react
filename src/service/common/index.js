import { apiHttp } from '../apiHttp';
import api from './api';
export default {
    login: async (params) => {
        const res = await apiHttp(api.API_LOGIN, params);
        return res;
    },
    refreshData: async () => {
        const res = await apiHttp(api.REFRESH_FIELD_LIST);
        return res;
    }
};


