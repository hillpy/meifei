import Vue from 'vue'
import App from './app.vue'
import meifei from '../dist/meifei'
import '../dist/meifei.css'
import './scss/reset.scss'

Vue.use(meifei)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')