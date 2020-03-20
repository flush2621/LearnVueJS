import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/MainContainer'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/Home')
        },
        {
          path: '/rank',
          name: 'rank',
          component: () => import('../views/Rank')
        },
        {
          path: '/usercenter',
          name: 'usercenter',
          component: () => import('../views/UserCenter')
        },
        {
          path: '/helloworld',
          name: 'hello',
          component: HelloWorld
        }
      ]
    },
    
  ]
})
