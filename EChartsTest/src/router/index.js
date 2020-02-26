import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/Parent.vue'),
      redirect: '/unionsup'
    },
    {
      path: '/home/:id', //动态路由
      name: 'home',
      component: () => import('../views/Home.vue'),
      children:[
        {
          path: '/child', //嵌套路由
          component: () => import('../views/Child.vue')
        }
      ]
    },
    {
      path: '/mylayout',
      component: () => import('../views/element/MyLayout.vue')
    },
    {
      path: '/table',
      component: () => import('../views/element/Table.vue')
    },
    {
      path: '/chart',
      component: () => import('../views/element/Chart.vue')
    },
    {
      path: '/chartTest',
      component: () => import('../views/element/ChartTest.vue')
    },
    {
      path: '/chartmap',
      component: () => import('../views/element/ChartMap.vue')
    },
    {
      path: '/formtest',
      component: () => import('../views/element/FormTest.vue')
    },
    {
      path: '/unionsup',
      component: () => import('../views/element/UnionSup.vue')
    }
  ]
})
