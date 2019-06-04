import Vue from 'vue'
import router from './router'
import App from './App1.vue'
import store from './store'
import Header from './components/globals/TabMenu'

Vue.config.productionTip = false

Vue.component('main-header', Header);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// }).$mount('#app')
