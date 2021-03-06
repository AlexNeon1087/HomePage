import Vue from 'vue'
import App from './App.vue'
import {Menu} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import i18n from './vue-i18n/i18n'
// import $ from 'jquery'
import './assets/lib/fullpage/jquery.fullpage.min.css'
import './assets/css/commen.css'
import router from './router/router.js'

Vue.use(Menu)
new Vue({
  el: '#kkl',
  router,
  i18n,
  render: h => h(App)
})
