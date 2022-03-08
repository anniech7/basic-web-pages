import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data.js'
import router from './router'


Vue.config.productionTip = false

let data = {
  products: mock,
}

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
