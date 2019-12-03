
const routes = [
  {
    path: '/',component: () => import('layouts/Login.vue') //, meta: { name: 'Form Login' }
  },
  {
    path: '/mylayout', 
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/current', component: () => import('pages/CurrentData.vue') },
      { path: '/upload', component: () => import('pages/Upload.vue') },
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
