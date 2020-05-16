import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import  Login  from '../views/Login/index.vue'


Vue.use(VueRouter)
//引入布局组件
import Layout from '@/views/Layout/index.vue'

  const routes = [

//重定向
        {
    path: '/',
    redirect: "login",
    meta:{
      name:"主页",
      icon:"el-icon-s-home"
    }
  },

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
    {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta:{
      name: "登录"
    },
    component: () => import("../views/Login/login.vue")
  },

    //后台路由控制台
      {
          path: '/console',
          name: 'Console',
          redirect: "index",
          meta: {
              name: "控制台",
              icon:"el-icon-watermelon"
          },
          component: Layout,
          //引入结构的页面
          // component: () => import("../views/Layout/index.vue"),
          children: [
              {
                  path: "/index",
                  name: "Index",
                  hidden: false,
                  meta: {
                      name: "首页",
                      icon:"el-icon-s-home"
                  },

                  component: () => import("../views/Console/index.vue"),

              },
              {
                  path: "/info",
                  name: "Info",
                  meta: {
                      name: "信息管理"
                  },
                  component: () => import("../views/Layout/index.vue"),
              },
              {
                  path: "/infoIndex",
                  name: "InfoIndex",
                  meta: {
                      name: "信息列表"
                  },
                  component: () => import("../views/Info/index.vue"),
              },
           {
                  path: "/infoCategory",
                  name: "InfoCategory",
                  meta: {
                      name: "信息分类",
                      icon:'el-icon-watermelon'
                  },
                  component: () => import("../views/Info/category.vue"),
              }]
      },

/**=======用户管理管理**/
{
    path: '/user',
    name: 'User',
    // redirect: "index",
    meta:{
      name:"用户管理",
      icon:'el-icon-user',
    },
    component: Layout,
        //引入结构的页面
    // component: () => import("../views/Layout/index.vue"),
    children: [
        {
      path: "/userIndex",
      name: "UserIndex",
      meta: {
        name:"用户列表"

      },
      component: () => import("../views/User/index.vue")},

                {
      path: "/index",
      name: "Index",
      meta: {
        name:"haha"
      }}

    ]
}







  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
