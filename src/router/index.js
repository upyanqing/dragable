import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import CreateModel from '@/pages/createModel/CreateModel'
import Models from '@/pages/models/Models'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/CreateModel',
      name: 'CreateModel',
      component: CreateModel
    }, {
      path: '/Models',
      name: 'Models',
      component: Models
    }
  ]
})
