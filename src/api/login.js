import service from "../utils/request"


/**
 * 获取验证码,暂时使用邮箱操作
 * **/
export function GetSms(data) {
    return service.request({
        method: "post",
        url: '/__api__/getSms/',
        // url: '/getSms/',
        // url: '/',
        data
        //data:data,左边的data变量名key，后台接收的，右边data是接收的参数，如果两者都同名情况下，可以写成一个data es6写法

    })
}




/**
 * 获取用户角色
 * **/



/**
 * 登录
 * **/


/**
 * 获取注册
 * **/