import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'hello',
      component: HelloWorld
    },
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
    }
  ]
})
