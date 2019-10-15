<template>
  <div :class="wrapperClasses" :style="wrapperStyles" v-show="!hide">
    <div :class="barBoxClasses" :style="barBoxStyles">
      <div :class="barClasses" :style="barStyles"></div>
    </div>
  </div>
</template>

<script>
  import name from '../../common/js/name'

  const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.progressBar.toLowerCase()

  export default {
    name: name.componentsName.progressBar,
    props: {
      decimal: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'top'
      },
      endedHide: {
        type: Boolean,
        default: true
      },
      maxWidth: {
        type: String,
        default: '750px'
      }
    },
    data () {
      return {
        hide: false
      }
    },
    watch: {
      decimal (val) {
        if (val >= 1 && this.endedHide === true) {
          this.hide = true
        }
      }
    },
    computed: {
      wrapperClasses () {
        return `${PREFIX_CLS}` + '-wrapper'
      },
      barBoxClasses () {
        return `${PREFIX_CLS}` + '-box'
      },
      barClasses () {
        return `${PREFIX_CLS}`
      },
      wrapperStyles () {
        let position = ''
        let positionArr = ['top', 'bottom']
        let positionStyle = {
          top: 'top: 0; bottom: auto;',
          bottom: 'top: auto; bottom: 0;'
        }
        position = positionArr.indexOf(this.position) === -1 ? 'top' : this.position
        return positionStyle[position]
      },
      barBoxStyles () {
        let styles = ''
        if (this.maxWidth) {
          styles += 'maxWidth: ' + this.maxWidth + ';'
        }
        return styles
      },
      barStyles () {
        let decimal = 0
        decimal = this.decimal > 1 ? 1 : this.decimal
        decimal = (decimal * 100).toFixed(2)
        if (decimal.indexOf('.00') != -1) {
          decimal = decimal.replace(/\.00/g, '')
        }
        this.percentDecimal = decimal + '%'
        return 'width: ' + this.percentDecimal + ';'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/style/progress-bar";
</style>