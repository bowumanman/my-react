import axios from './axios';
import uriTemplates from 'uri-templates';

export const HTTP_RES_CODE = '0';
export const apiHttp = (methodApi, dataParams) => {
    const params = Object.assign({}, dataParams);
    methodApi.url = new uriTemplates(methodApi.url).fill(params);
    const config = Object.assign({ emulateJSON: false }, methodApi);
    if (config.method.toLowerCase() === 'get') {
        config.params = Object.assign({}, dataParams);
    } else {
        config.data = Object.assign({}, dataParams);
    }
    return new Promise((resolve, reject) => {
        axios(config).then(res => {
            resolve(res);
        });
    });
};


