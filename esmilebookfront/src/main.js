import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import Header from './components/globals/TabMenu'
import ChatTab from './components/globals/ChatTab'
import ChatBox from './components/globals/ChatBox'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.component('main-header', Header)
Vue.component('chat-tab', ChatTab)
Vue.component('chat-box', ChatBox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
