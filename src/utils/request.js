/***
 * 拦截器
 * */

import axios from 'axios'

//创建axios，赋给变量service
const service = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000

});


//打印出开发环境
//可以自定义环境变量生产和 测试
console.log(process.env.NODE_ENV)
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
    return response
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