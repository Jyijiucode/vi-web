import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/license_plate',
    name: 'license plate',
    component: () => import('@/views/license_plate/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/vehicle_detect',
    name: 'vehicle detect',
    component: () => import('@/views/vehicle_detect/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('@/views/car/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/vehicle_attr',
    name: 'vehicle attr',
    component: () => import('@/views/vehicle_attr/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/vehicle_damage',
    name: 'vehicle damage',
    component: () => import('@/views/vehicle_damage/index.vue'),
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/driver_behavior',
    name: 'driver behavior',
    component: () => import('@/views/driver_behavior/index.vue'),
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
