import service from "../utils/request"


/**
 * 获取验证码,暂时使用邮箱操作
 * **/
export function GetSms() {
    service.request({
        method: "get",
        url: 'GetSms/',
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