<template>
  <div>
    <nav-bar>
      <template slot="title">
        这是一个导航组件，目前固定于顶部。
      </template>
    </nav-bar>
    <loading :show="loading.show" :type="loading.type"></loading>
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
        }
      }
    },
    mounted () {
      let _this = this
      setTimeout(() => {
        _this.loading.show = false
      }, 3000)
    }
  }
</script>