import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloList from '@/components/HelloList'
import Currency from '@/components/Currency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'HelloList',
      component: HelloList
    },
    {
      path: '/currencies',
      name: 'Currency',
      component: Currency
    }
  ]
})
