const baseUrl = (type = process.env.NODE_ENV) => {
    let url = '';
    switch (type) {
        case 'development':
            url = 'http://192.168.2.239:7426';
            // url = 'http://dev.cvsource.com.cn:9005';
            break;
        case 'test':    
            url = 'http://dev.cvsource.com.cn:9005';
            break;
        case 'production':    
            url = 'http://dev.cvsource.com.cn:9005';
            break;    
        default: url = 'http://dev.cvsource.com.cn:9005';
    }
    return url + '/shunde';
};
export default baseUrl();