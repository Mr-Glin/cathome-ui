import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Adopt from '@/components/Adopt'
import Community from '@/components/Community'
import Medical from '@/components/Medical'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
    ,
    {
      path: '/adopt',
      name: 'Adopt',
      component: Adopt
    }
    ,
    {
      path: '/community',
      name: 'Community',
      component: Community
    }
    ,
    {
      path: '/medical',
      name: 'Medical',
      component: Medical
    }
    ,
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
