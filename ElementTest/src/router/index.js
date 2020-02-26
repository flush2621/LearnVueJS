import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/layout3'
    },
    {
      path: '/layout1',
      component: () => import('@/views/LayoutTest1.vue')
    },
    {
      path: '/layout2',
      component: () => import('@/views/LayoutTest2.vue')
    },
    {
      path: '/layout3',
      component: () => import('@/views/LayoutTest3.vue')
    }
  ]
})
