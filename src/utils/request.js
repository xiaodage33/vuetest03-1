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
/**请求接口前，做一些数据处理拦截，请求头**/
service.interceptors.request.use(function(config){
    //再发送请求前做什么
    //后台需要前端这边传象关的参数（在请求头）
    //Tokey  ，userId，sui
    console.log(config.headers)

    //最终目的不是在请求头参加参数,在请求头显示
    config.headers['Tokey']='19000'
    config.headers['userId'] ='19111'
    config.headers['sui']='19222'
    config.headers['www']='sW12'


    return config;
},function (error) {
    return Promise.reject(error);
});


//添加响应拦截器
/**请求接口返回数据进行拦截，响应拦截**/

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