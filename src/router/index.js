import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Signed from '@/pages/Signed'
import SignIn from '@/pages/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Signed', component: Signed, children: [ {
      path: 'home', name: 'Home', component: Home
    }] },
    { path: '/signIn', name: 'SignIn', component: SignIn }
  ]
})
