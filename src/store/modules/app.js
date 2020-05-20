


const state= {

    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,

}

const getters = {
    isCollapse: state => state.iscollapse

}

const mutations = {
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse;
        sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse));
        //区分哪个命名空间
        console.log('app')


    }

}

const actions={  //可以回调处理事情
        login(content,requestData) {
            return new Promise((resolve, reject) => {
                //接口
                Login(requestData).then((response) => {

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





import { Login } from "../../api/login";
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
