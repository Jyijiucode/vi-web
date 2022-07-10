import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/license_plate',
    name: 'license_plate',
    component: () => import('@/views/license_plate/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/vehicle_detect',
    name: 'vehicle_detect',
    component: () => import('@/views/vehicle_detect/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
