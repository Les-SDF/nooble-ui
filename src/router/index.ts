import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/users/:id',
      name: 'ProfileUser',
      component: () => import('@/views/ProfileUser.vue'),
    },
    {
      path: '/users/:id/events',
      name: 'EventUser',
      component: () => import('@/views/EventUser.vue'),
    },
    {
      path: '/events',
      name: 'EventList',
      component: () => import('@/views/EventsList.vue'),
    },
    {
      path: '/events/:id',
      name: 'EventDetail',
      component: () => import('@/views/EventDetail.vue'),
    }
  ],
})

export default router
