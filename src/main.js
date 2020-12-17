import Vue from 'vue'

import 'normalize.css' // reset css

import '@/styles/index.scss' // global css

import ElementUI from 'element-ui'
import './styles/element-variables.scss' // 自定义主题

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
