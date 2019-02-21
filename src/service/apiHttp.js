import axios from './axios';
import uriTemplates from 'uri-templates';

export const HTTP_RES_CODE = '0';
export const apiHttp = (urlParams, dataParams) => {
    const urlData = Object.assign({}, urlParams);
    const params = Object.assign({}, dataParams);
    urlData.url = new uriTemplates(urlData.url).fill(params);
    const config = Object.assign({ emulateJSON: false }, urlData);
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


