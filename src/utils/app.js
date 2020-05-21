import cookie  from "cookie_js";

//引入cookie后在 路由 拦截那 判断 cookie 是否有token 在进行进入

const adminToken = "admin_token";
const usernamekey = "username";


export function getToken(){
    return cookie.get(adminToken)

}

export function setToken(token){
    return cookie.set(adminToken,token)
}

export function removeToken(token){
    return cookie.set(adminToken,token);
}

export function setUserName(value){
    return cookie.set(usernamekey,value);

}
export function getUserName(){
    return cookie.get(usernamekey);
}