import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import router from './router'
import VueCookie from 'vue-cookie'
import VueMasonry from 'vue-masonry-css'
 
Vue.use(VueMasonry)
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
