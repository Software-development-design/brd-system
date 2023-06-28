import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import ('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/use',
      name: 'use',
      component:()=> import ('../views/UseView.vue')
    },
    {
      path: '/example',
      name: "example",
      component:()=> import('../views/ExampleView.vue')
    }
  ]
})

export default router
