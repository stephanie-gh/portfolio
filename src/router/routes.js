const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home Page', component: () => import('pages/IndexPage.vue') },
      { path: '/projects', name: 'Projects Page', component: () => import('pages/ProjectsPage.vue') },
      { path: '/info', name: 'Info Page', component: () => import('pages/InfoPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
