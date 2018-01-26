import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import i18n from './vue-i18n/i18n'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/commen.css'

import router from './router/router.js'

Vue.use(ElementUI)
new Vue({
  el: '#kkl',
  router,
  i18n,
  render: h => h(App)
})
