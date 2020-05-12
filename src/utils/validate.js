//特殊字符验证过滤,export使用这个暴露方法，其他可以调用，也可以写多个方法

export function stripscript(str){
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{ }【】‘；：”“'。，、？%+_]");

    var rs = "";
    for(var i=0;i< str.length;i++)
    {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
//验证邮箱
export function validateEmial(value) {
     let reg = /^([a-zA-Z]|[0-9])(\w|\\-)+@([a-zA-Z0-9])+\.([a-zA-Z]{2,4})$/;

    // return !reg.test(value) ? true : false

     if(!reg.test(value)){
         return true

     }else{
         return false
     }
}
//验证密码
export function validatepass(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return !reg.test(value) ? true : false

}
//验证码
export function validatecode(value) {
    let reg = /^[a-z0-9]{6}$/
    return !reg.test(value) ? true : false
}

/**没有使用export defatult，可以使用多个export
 * 文件 import 导入需要花括号
 * **/