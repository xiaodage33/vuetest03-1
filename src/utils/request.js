/***
 * 拦截器
 * */

import axios from 'axios'
import {Message} from 'element-ui'

// const BASEURL = process.env.NODE_ENV === 'production' ? '' : 'http://www.web-jshtml.cn/productapi';
// const BASEURL = process.env.NODE_ENV === 'production' ? '' : 'api';

//创建axios，赋给变量service
const service = axios.create({
    //视频验证码api地址：http://www.web-jshtml.cn/productapi/getSms
    // baseURL: 'http://127.0.0.1:9999/drftest/show',
    // baseURL: BASEURL,    //http://127.0.0.1:9999/drftest/show这个地址等于 api 。已经替换了vue地址+api
    timeout: 1000,

});


//打印出开发环境
//可以自定义环境变量生产和 测试
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_ABC)
//添加请求拦截器
service.interceptors.request.use(function(config){
    //再发送请求前做什么
    return config;
},function (error) {
    return Promise.reject(error);
});

//添加响应拦截器
service.interceptors.response.use(function(response){
    //对响应数据做点什么
    let data = response.data
    if(data.resCode !== 0){
        //后端的拦截
        Message.error(data.message);
        return Promise.reject(data);
    }
    else{
        return response;
    }

    // console.log(response)

}, function(error) {
    //对响应错误做点什么
    return Promise.reject(error);
});

// service.request(
//     {
//         method: 'post',
//         url: '/user/12345',
//         data:{
//             firstName:'Fred',
//             lastName: 'Flimnstone'
//     }
//     })



export default service;
/**使用export defatult，不能同时存在多个default
 * 文件 import 导入不需要花括号
 * **/