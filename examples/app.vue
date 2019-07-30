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
      <div class="segment">
        <div class="title">按钮类型</div>
        <div class="content">
          <mf-button :type="button.default.type" :title="button.default.title[0]" @buttonClick="button.default.click"></mf-button>
          <mf-button :type="button.primary.type" :title="button.primary.title[0]" @buttonClick="button.primary.click"></mf-button>
          <mf-button :type="button.info.type" :title="button.info.title[0]" @buttonClick="button.info.click"></mf-button>
          <mf-button :type="button.success.type" :title="button.success.title[0]" @buttonClick="button.success.click"></mf-button>
          <mf-button :type="button.warning.type" :title="button.warning.title[0]" @buttonClick="button.warning.click"></mf-button>
          <mf-button :type="button.error.type" :title="button.error.title[0]" @buttonClick="button.error.click"></mf-button>
          <mf-button :type="button.text.type" :title="button.text.title[0]" @buttonClick="button.text.click"></mf-button>
        </div>
      </div>
      <div class="segment">
        <div class="title">按钮尺寸</div>
        <div class="content">
          <mf-button :type="button.default.type" :title="button.default.title[1]" :size="button.default.size" @buttonClick="button.default.click"></mf-button>
          <mf-button :type="button.primary.type" :title="button.primary.title[1]" :size="button.primary.size" @buttonClick="button.primary.click"></mf-button>
          <mf-button :type="button.info.type" :title="button.info.title[1]" :size="button.info.size" @buttonClick="button.info.click"></mf-button>
          <mf-button :type="button.success.type" :title="button.success.title[1]" :size="button.success.size" @buttonClick="button.success.click"></mf-button>
          <mf-button :type="button.warning.type" :title="button.warning.title[1]" :size="button.warning.size" @buttonClick="button.warning.click"></mf-button>
          <mf-button :type="button.error.type" :title="button.error.title[1]" :size="button.error.size" @buttonClick="button.error.click"></mf-button>
          <mf-button :type="button.text.type" :title="button.text.title[1]" :size="button.text.size" @buttonClick="button.text.click"></mf-button>
        </div>
      </div>
      <div class="segment">
        <div class="title">按钮内容</div>
        <div class="content">
          <mf-button :type="button.primary.type" :icon="button.primary.icon" :title="button.primary.title[2]" @buttonClick="button.primary.click"></mf-button>
          <mf-button :type="button.primary.type" :icon="button.primary.icon" @buttonClick="button.primary.click"></mf-button>
          <mf-button :type="button.primary.type" :title="button.primary.title[2]" @buttonClick="button.primary.click"></mf-button>
        </div>
      </div>
      <div class="segment">
        <div class="title">按钮形状</div>
        <div class="content">
          <mf-button :type="button.primary.type" :title="button.primary.title[3]" :size="button.primary.size" :radius="button.primary.radius[0]" @buttonClick="button.primary.click"></mf-button>
          <mf-button :type="button.primary.type" :title="button.primary.title[3]" :radius="button.primary.radius[0]" @buttonClick="button.primary.click"></mf-button>
          <mf-button :type="button.primary.type" :title="button.primary.title[3]" :radius="button.primary.radius[1]" @buttonClick="button.primary.click"></mf-button>
        </div>
      </div>
      <div class="segment">
        <div class="title">长按钮</div>
        <div class="content">
          <mf-button :type="button.primary.type" :title="button.primary.title[4]" :long="button.primary.long" @buttonClick="button.primary.click"></mf-button>
        </div>
      </div>
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
            title: [
              'Default',
              'xx-large'
            ],
            size: 'xx-large',
            click: () => {
              console.log('default button clicked')
            }
          },
          'primary': {
            type: 'primary',
            icon: {
              name: 'ios-home'
            },
            title: [
              'Primary',
              'x-large',
              '文本',
              '形状',
              '长按钮'
            ],
            size: 'x-large',
            radius: [
              'circle',
              '5px'
            ],
            long: true,
            click: () => {
              console.log('primary button clicked')
            }
          },
          'info': {
            type: 'info',
            title: [
              'Info',
              'large'
            ],
            size: 'large',
            click: () => {
              console.log('info button clicked')
            }
          },
          'success': {
            type: 'success',
            title: [
              'Success',
              'default'
            ],
            size: '',
            click: () => {
              console.log('success button clicked')
            }
          },
          'warning': {
            type: 'warning',
            title: [
              'Warning',
              'small'
            ],
            size: 'small',
            click: () => {
              console.log('warning button clicked')
            }
          },
          'error': {
            type: 'error',
            title: [
              'Error',
              'x-small'
            ],
            size: 'x-small',
            click: () => {
              console.log('error button clicked')
            }
          },
          'text': {
            type: 'text',
            title: [
              'Text',
              'xx-small'
            ],
            size: 'xx-small',
            click: () => {
              console.log('text button clicked')
            }
          },
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
      .segment {
        margin-bottom: 20px;
        .title {
          font-size: 14px;
          margin-bottom: 10px;
          padding-left: 10px;
          box-sizing: border-box;
          border-left: 5px solid #f00;
        }
        .content {
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
