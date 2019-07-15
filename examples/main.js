import Vue from 'vue'
import App from './app.vue'
import meifei from '../src/index'

Vue.use(meifei)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')