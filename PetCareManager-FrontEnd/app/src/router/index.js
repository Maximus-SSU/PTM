import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/userRegistration',
    name: 'userRegistration',
    component: () => import('../views/UserRegistrationView.vue')
  },
  {
    path: '/userAuthorization',
    name: 'userAuthorization',
    component: () => import('../views/UserAuthorizationView.vue')
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPasswordView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
