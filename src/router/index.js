import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorld from '@/view/HelloWorld'
// import test from '@/view/test'
import ratings from '@/view/ratings'
// import test from '@/components/test'
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ratings',
      component: ratings
    }
  ]
})
