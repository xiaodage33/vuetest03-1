import service from "../utils/request"


/**
 * 获取验证码,暂时使用邮箱操作
 * **/
export function GetSms() {
    service.request({
        method: "post",
        url: '/__api__/getSms/',
        // url: '/getSms',

        data: {},
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