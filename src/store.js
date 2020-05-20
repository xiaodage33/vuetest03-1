
import Vue from 'vue'
import Vuex from 'vuex'
import { Login } from "../api/login";
import Cookie from "cookie_js"


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // isCollapse: false,
        //   count: 10
        //优先到浏览器取值，没有则是false
        // isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
//取本地存储
//       isCollapse: localStorage.getItem('isCollapse') || false
        //cookie取值
        isCollapse: JSON.parse(Cookie.get('isCollapse')) || false
    },
    getters: {   //computed
        count: state => state.count + 10
    },
    // count: function(state){
    //  return state.count +10
    // }},

//同步请求,同步没有回调处理事情
    mutations: {  //修改上面count在这里修改

        // SET_COLLAPSE(state){
        //   // console.log(333333)
        //   state.isCollapse = !state.isCollapse
        //    // console.log(state.isCollapse)
        // },
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
            // html5本地存储
            // sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
            //存储到本地除非删除本地cookie
            //   localStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))

            //使用Cookie存取
            Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
        }


        // SET_COUNT(state,value){
        //   state.count = value
        //   console.log(state.count)
        // },


    },
    actions: {  //可以回调处理事情
        login(content,requestData){
            return new Promise((resolve,reject)=>{
                //接口
            Login(requestData).then((response)=>{

                resolve(response)
            }).catch(error=>{
                reject(error)
            })
            })

        }




        // setMenuStatus(content, data) {
        //
        //     //异步，请求接口返回数据后，接着去做别的事情
        //     /**
        //      * 接口A,接口B
        //      * B接口需要A接口的参数
        //      * **/



            // content.state
            // content.getter
            // content.commit
            // content.rootGetters

            //修改mutations的
            // console.log(content)
            // content.commit('SET_COLLAPSE')
            // console.log(data)
            // console.log(999)
        // }

  },

  modules: {
  }
})