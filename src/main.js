import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import vueRouter from './router'
import axios from 'axios'
import './common/stylus/index.styl'

// axios.defaults.baseURL = 'http://localhost:8080'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: vueRouter
}).$mount('#app')
