import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    hidden: true
  }
]

export const asyncRoutes = [
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },
  {
    path: '/chart',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/charts/index'),
        name: 'Charts',
        meta: { title: 'Charts', icon: 'icon', noCache: true }
      }
    ]
  },
  {
    path: '/pdf',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'Pdf',
        meta: { title: 'Pdf', icon: 'icon', noCache: true }
      }
    ]
  }
]

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
