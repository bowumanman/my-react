import { apiHttp } from '../apiHttp';
import api from './api';
export default {
    getData: async () => {
        const res = await apiHttp(api.GET_DATA);
        return res;
    },
};


