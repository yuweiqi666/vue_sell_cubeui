import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import vueRouter from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: vueRouter
}).$mount('#app')
