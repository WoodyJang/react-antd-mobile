import axios from 'axios';
import qs from 'qs';
import md5 from 'md5';

const baseURL = '?service=';
const appkey = '6fc18957ce391f84a7ce34ce13cd99c4';
// 获取sign
const getSign = (params) => {
    params = params || {};
    params.appkey = appkey;
    for (let key in params) {
        if (!params[key]) {
            delete params[key];
        }
    }

    let keyArr = Object.keys(params).sort();
    let Kstr = '';

    for (let i in keyArr) {
        if (keyArr[i]) Kstr += params[keyArr[i]];
    }
    delete params.appkey;
    return md5(Kstr);
};

export default function request(method, url, params) {
    const instance = axios.create(
        baseURL,
    );

    instance.defaults.headers.post['Content-Type'] = 'application/json';

    // 添加请求拦截器
    instance.interceptors.request.use((config) => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
    }, error => Promise.reject(error));

    // 添加相应拦截器
    instance.interceptors.response.use(response => response, error => Promise.reject(error));
    params = params || {};
    params.timestamp = +new Date();
    params.sign = getSign(params);

    return instance.request({
        params: Object.assign({}, params),
        method: method || 'post',
        url: baseURL + url || '',
    });
}
