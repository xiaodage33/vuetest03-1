import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
      count: 10
  },
  getters:{   //computed
    count: state => state.count +10
      },
    // count: function(state){
    //  return state.count +10
    // }},


  mutations: {  //修改上面count在这里修改

    SET_COLLAPSE(state){
      // console.log(333333)
      state.isCollapse = !state.isCollapse
       // console.log(state.isCollapse)
    },


    SET_COUNT(state,value){
      state.count = value
      console.log(state.count)
    }

    },
  actions: {
  },
  modules: {
  }
})
