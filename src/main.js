import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './scss/illustration.scss'
import VueSilentbox from 'vue-silentbox'

Vue.config.productionTip = false

Vue.use(VueSilentbox)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
