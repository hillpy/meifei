<template>
  <div class="wrapper">
    <mf-nav-bar :maxWidth="navBar.maxWidth" :leftIcon="navBar.leftIcon" :rightIcon="navBar.rightIcon">
      <template slot="title">
        这是一个导航组件，目前固定于顶部。
      </template>
    </mf-nav-bar>
    <mf-loading :show="loading.show" :type="loading.type"></mf-loading>
    <mf-progress-bar :decimal="progress.decimal" :position="progress.position"></mf-progress-bar>
    <div class="container">
      <mf-button :type="button.default.type" :icon="button.default.icon" :title="button.default.title" @buttonClick="button.default.click"></mf-button>
      <mf-button :type="button.primary.type" :icon="button.primary.icon" :title="button.primary.title" @buttonClick="button.primary.click"></mf-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        navBar: {
          maxWidth: '750px',
          leftIcon: {
            name: 'ios-arrow-back',
            click: (e) => {
              this.leftIconClick(e)
            }
          },
          rightIcon: {
            name: 'ios-menu',
            click: (e) => {
              this.rightIconClick(e)
            }
          }
        },
        loading: {
          show: true,
          type: 1
        },
        progress: {
          decimal: 0,
          position: 'bottom',
          showTip: true,
          maxWidth: '750px'
        },
        button: {
          'default': {
            type: 'default',
            title: 'Default',
            click: () => {
              console.log('default button clicked')
            }
          },
          'primary': {
            type: 'primary',
            title: 'Primary',
            click: () => {
              console.log('primary button clicked')
            }
          }
        }
      }
    },
    methods: {
      leftIconClick (e) {
        alert('leftIcon clicked')
      },
      rightIconClick (e) {
        alert('rightIcon clicked')
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
          clearInterval(decimalIntervalIndex)
        }
      }, 10)
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    max-width: 750px;
    height: 100vh;
    margin: 0 auto;
    padding: 45px 0;
    box-sizing: border-box;
    .container {
      box-sizing: border-box;
      padding: 5px;
    }
  }
</style>
