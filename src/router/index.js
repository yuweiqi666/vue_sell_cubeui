import Vue from 'vue'
import VueRouter from 'vue-router'

import seller from '../components/content/seller.vue'
import goods from '../components/content/goods.vue'
import ratings from '../components/content/ratings.vue'

Vue.use(VueRouter)

const vueRouter = new VueRouter({
  routes: [
    { path: '/', redirect: '/goods' },
    { path: '/seller', component: seller },
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings }
  ]
})

export default vueRouter
