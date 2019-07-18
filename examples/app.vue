<template>
  <div>
    <!-- <mf-nav-bar>
      <template slot="title">
        这是一个导航组件，目前固定于顶部。
      </template>
    </mf-nav-bar> -->
    <mf-loading :show="loading.show" :type="loading.type"></mf-loading>
    <mf-progress-bar :decimal="progress.decimal"></mf-progress-bar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        loading: {
          show: true,
          type: 1
        },
        progress: {
          decimal: 0
        }
      }
    },
    mounted () {
      let _this = this
      setTimeout(() => {
        _this.loading.show = false
      }, 3000)
      setInterval(() => {
        _this.progress.decimal += 0.01
      }, 10)
    }
  }
</script>