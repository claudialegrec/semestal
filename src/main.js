import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlassCheers, faHome, faSignOutAlt, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faGlassCheers,  faHome, faSignOutAlt, faCalendarAlt, faUser)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
