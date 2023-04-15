
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/me',
        component: () => import('pages/IndexPage.vue'),
        meta: { id: 1, icon: 'fa-solid fa-house-user', title: 'About me' }
      },
      {
        path: '/about',
        component: () => import('pages/IndexPage.vue'),
        meta: { id: 2, icon: 'fa-solid fa-circle-info', title: 'About this project' }
      }
    ]
  },
  {
    path: '/sandbox',
    component: () => import('layouts/MainLayout.vue'),
    meta: { id: 3, icon: 'fa-solid fa-cubes', title: 'Sandbox' },
    children: [
      {
        path: '/sandbox/teste',
        meta: { id: 4, icon: 'fa-solid fa-cubes', title: 'Teste' },
        component: () => import('pages/IndexPage.vue')
      }
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
