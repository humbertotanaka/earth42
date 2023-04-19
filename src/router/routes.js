
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageAboutMe.vue'),
        meta: { id: 1, icon: 'fa-solid fa-house-user', path: '/me', title: 'About me' }
      },
      {
        path: 'about',
        component: () => import('pages/PageAboutThis.vue'),
        meta: { id: 2, icon: 'fa-solid fa-circle-info', path: '/about', title: 'About this project' }
      }
    ]
  },
  {
    path: '/sandbox',
    component: () => import('layouts/MainLayout.vue'),
    meta: { /* id: 3, */ icon: 'fa-solid fa-cubes', title: 'Sandbox' },
    children: [
      {
        path: '',
        component: () => import('pages/PageSoon.vue'),
        meta: { id: 4, icon: 'fa-solid fa-umbrella-beach', path: '/sandbox', title: 'Sandbox' }
      }
      /* {
        path: 'login',
        component: () => import('pages/PageLogin.vue'),
        meta: { id: 4, icon: 'fa-solid fa-cubes', path: '/sandbox/login', title: 'Login' }
      } */
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
