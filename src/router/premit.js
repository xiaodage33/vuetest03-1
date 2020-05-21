import router from "./index";
import {getToken, removeToken} from "../utils/app";


//声明白名单
const whiteRouter = ['/login']; //indexOf方法，判断数字中是否存在指定的某个对象,如果不存在返回-1

//路由守卫
router.beforeEach((to, from, next)=>{
  if(getToken()){
      console.log('到底',to)
      if(to.path === '/login'){
          removeToken();
          next();
      }else{
          next();
      }


      //路由动态添加，分配菜单，每个角色分配不同的菜单 username token
      console.log('存在token')
  }else{
    //不能直接使用  next('/login') 不然会一直跳转
/**直接进入index，参数to被改变成/index 出发路由指向，就会跑beforeEach；
 * 再一次next 指向了 login ，再次发送路由指向，再跑beforeEach ，参数的to被改变成/login
 * 白名单判断存在，则直接执行next（），因为没有参数，所以不会再次beforeEach**/
    console.log('不存在')
    console.log(to.path)
    if(whiteRouter.indexOf(to.path) !== -1) {
      next()
    }
    else{
          next('/login')
        }
}
  console.log(to)  //进入页面（下一个页面）
  console.log(from)  //离开前的页面上一个
  console.log(next)
  next()
//token令牌
})