<template>
  <div>
    <mf-nav-bar>
      <template slot="title">
        这是一个导航组件，目前固定于顶部。
      </template>
    </mf-nav-bar>
    <mf-loading :show="loading.show" :type="loading.type"></mf-loading>
    <mf-progress-bar :decimal="progress.decimal" :position="progress.position"></mf-progress-bar>
  </div>
</template>

<script>
import { clearInterval } from 'timers';
  export default {
    name: 'App',
    data () {
      return {
        loading: {
          show: true,
          type: 1
        },
        progress: {
          decimal: 0,
          position: 'bottom'
        }
      }
    },
    mounted () {
      let _this = this
      let decimalIntervalIndex = ''
      setTimeout(() => {
        _this.loading.show = false
      }, 2000)
      decimalIntervalIndex = setInterval(() => {
        _this.progress.decimal += 0.01
        if (_this.progress.decimal >= 1) {
          _this.progress.decimal = 1
          window.clearInterval(decimalIntervalIndex)
        }
      }, 10)
    }
  }
</script>