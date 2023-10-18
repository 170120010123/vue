import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
 
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path: '/home/results',
          name: 'Results',
          component: () => import(/* webpackChunkName: "about" */ '../views/Results.vue'),
      
      
      }, {
        path: '/home/doctorinfo',
          name: 'DoctorInfo',
          component: () => import(/* webpackChunkName: "about" */ '../views/DoctorInfo.vue'),
      
      
      },
      {
        path: '/home/registered',
          name: 'Registered',
          component: () => import(/* webpackChunkName: "about" */ '../views/Registered.vue'),
      
      
      },
      
      {
        path: '/home/guahao',
          name: 'GuaHao',
          component: () => import(/* webpackChunkName: "about" */ '../views/GuaHao.vue'),
      
      
      },
      {
        path: '/home/infotwo',
          name: 'InfoTwo',
          component: () => import(/* webpackChunkName: "about" */ '../views/InfoTwo.vue'),
      
      
      },
      {
        path: '/home/pay',
          name: 'Pay',
          component: () => import(/* webpackChunkName: "about" */ '../views/Pay.vue'),
      
      
      },   
        ]
  },
  {
    path: '/selectregister',
    name: 'SelectRegister',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectRegister.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue'),
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
