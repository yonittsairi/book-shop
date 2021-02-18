import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/style.scss'
import Vuetify from 'vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

