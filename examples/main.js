import Vue from 'vue'
import App from './app.vue'
// import meifei from '../src/index'  // 从源码导入
import meifei from '../dist/meifei' // 从dist（打包后的目录）导入
import '../dist/meifei.css'
import './scss/reset.scss'

Vue.use(meifei)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')