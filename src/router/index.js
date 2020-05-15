import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import  Login  from '../views/Login/index.vue'


Vue.use(VueRouter)

  const routes = [

//重定向
        {
    path: '/',
    redirect: "login",
    meta:{
      name:"主页"
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
    path: '/info',
    name: 'Info',
    redirect: "index",
    meta:{
      name:"信息管理"
    },

        //引入结构的页面
    component: () => import("../views/Layout/index.vue"),
    children:[
    {
      path: "/index",
      name: "Index",
      hidden: false,
      meta: {
        name:"信息列表"
      },

      component:()=>import("../views/Console/index.vue"),
    },
      {
        path: "/index",
        name: "Index",
        meta:{
          name: "信息分类"
        },
        component:()=>import("../views/Console/index.vue"),
      },

       ]
  },


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
