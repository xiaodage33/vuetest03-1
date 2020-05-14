import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import  Login  from '../views/Login/index.vue'


Vue.use(VueRouter)

  const routes = [

//重定向
        {
    path: '/',
    redirect: "login"
  },

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
    {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login/login.vue")
  },

    //后台路由控制台
    {
    path: '/console',
    name: 'Console',
        //引入结构的页面
    component: () => import("../views/Layout/index.vue")
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
