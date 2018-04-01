import Vue from 'vue'
import Router from 'vue-router'
import Particle from '../components/particle/particleLine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Particle
    }
  ]
})
