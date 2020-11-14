import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/BootstrapVue'
import './plugins/fontAwesome'
import './assets/css/main.styl'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      console.log('probando que dice hola cuando se crea <--< hola')
      // store.dispatch('oauth/getToken', null, { root: true })
      store.dispatch('oauth/getToken')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
