
const app={
   state: {
        // isCollapse: false,
        //   count: 10
        //优先到浏览器取值，没有则是false
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
//取本地存储
//       isCollapse: localStorage.getItem('isCollapse') || false
        //cookie取值
        // isCollapse: JSON.parse(Cookie.get('isCollapse')) || false
    },
    getters: {   //computed
        count: state => state.count + 10
    },


//同步请求,同步没有回调处理事情
    mutations: {  //修改上面count在这里修改


        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
            // html5本地存储
            sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
            //存储到本地除非删除本地cookie
            //   localStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))

            //使用Cookie存取
            // Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
        }


        // SET_COUNT(state,value){
        //   state.count = value
        //   console.log(state.count)
        // },


    },
    actions: {  //可以回调处理事情
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

}

export default app;