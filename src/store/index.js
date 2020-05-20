import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // isCollapse: false,
    //   count: 10
      //优先到浏览器取值，没有则是false
    // isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
//取本地存储
      isCollapse: localStorage.getItem('isCollapse') || false


  },
  getters:{   //computed
    count: state => state.count +10
      },
    // count: function(state){
    //  return state.count +10
    // }},


  mutations: {  //修改上面count在这里修改

    // SET_COLLAPSE(state){
    //   // console.log(333333)
    //   state.isCollapse = !state.isCollapse
    //    // console.log(state.isCollapse)
    // },
    SET_COLLAPSE(state){
          state.isCollapse = !state.isCollapse
          // html5本地存储
          sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
        //存储到本地除非删除本地cookie
        //   localStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
        }


    // SET_COUNT(state,value){
    //   state.count = value
    //   console.log(state.count)
    // },



    },
  actions: {
  },
  modules: {
  }
})
