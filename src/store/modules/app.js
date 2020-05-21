// import cookie  from "cookie_js";
import { Login } from "../../api/login";
import {setToken,setUserName,getUserName} from "../../utils/app";


const state= {

    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    to_ken:'',
    // username: cookie.get('username') || ''
    username:  getUserName() || ''


}

const getters = {
    isCollapse: state => state.isCollapse,
    // username: state => state.username

}

const mutations = {
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse;
        sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse));
        //区分哪个命名空间
        console.log('app')
    },

    SET_TOKEN(state,value){
        state.to_ken = value
        },
    SET_USERNAME(state,value){
        state.username = value
    }


}

const actions={  //可以回调处理事情
        login({commit},requestData) {
            return new Promise((resolve, reject) => {
                //接口
                Login(requestData).then((response) => {
                    console.log(response)
                    //response输出可以看到data信息数据
                    let data = response.data.data
                    // content.commit('SET_TOKEN',data.token);
                    // content.commit('SET_USERNAME',data.username);
                    commit('SET_TOKEN',data.token);
                    commit('SET_USERNAME',data.username);
                    setToken(data.token);
                    setUserName((data.username));

                    // let data = response.data
                    // console.log(content)
                    // content.commit('SET_TOKEN',data.token);   //token username
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })

          }}

export default {
    namespaced: true,  //处理命名空间问题
    state,
    getters,
    mutations,
    actions
}





//
// const app={
//
//     state: {
//
//     // isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
//
//     },
//     getters: {   //computed
//             isCollapse: state => state.isCollapse
//
//     },
//
// //同步请求,同步没有回调处理事情
//     mutations: {  //修改上面count在这里修改
//         SET_COLLAPSE(state) {
//
//         state.isCollapse = !state.isCollapse;
//         // html5本地储存
//         sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse));
//     }
//
//
//     },
//
//
// }
//
