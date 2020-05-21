//路由守卫
import router from "./index";

router.beforeEach((to, from, next)=>{
  console.log(to)  //进入页面（下一个页面）
  console.log(from)  //离开前的页面上一个
  console.log(next)
  next()
//token令牌


})