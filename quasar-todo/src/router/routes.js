
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/todo', component: () => import('pages/Todo.vue') },
      { path: '/dotey', component: () => import('pages/Dotey.vue') },
      { path: '/report', component: () => import('pages/Report.vue') },
      { path: '/barcode', component: () => import('pages/Barcode.vue') },
      { path: '/upload', component: () => import('pages/Upload.vue') },
      { path: '/wheels', component: () => import('pages/Wheels.vue') },
      { path: '/threejs', component: () => import('pages/MyThreei.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
