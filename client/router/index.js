import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import MarketByRegion from '../views/MarketByRegion'
import RegionByFT from '../views/RegionByFT'
import EchartDemo from '../views/EchartDemo'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'regions',
      path: '/regions/:region',
      component: MarketByRegion
    },
    {
      name: 'generators',
      path: '/regions/:region/:ft',
      component: RegionByFT
    },
    {
      path: '/echart',
      component: EchartDemo
    }
  ]
})
