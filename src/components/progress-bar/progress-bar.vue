<template>
  <div :class="wrapperClasses" :style="wrapperStyles" v-show="!hide">
    <div :class="barClasses" :style="barStyles"></div>
    <span :class="tipClasses" v-if="showTip">{{ percentDecimal }}</span>
  </div>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.progressBar.toLowerCase()

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
      showTip: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        hide: false,
        percentDecimal: '0%'
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
        return `${prefixCls}` + '-wrapper'
      },
      barClasses () {
        return `${prefixCls}`
      },
      tipClasses () {
        return `${prefixCls}` + '-tip'
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
      barStyles () {
        let decimal = 0
        decimal = this.decimal > 1 ? 1 : this.decimal
        this.percentDecimal = (decimal * 100) + '%'
        return 'width: ' + this.percentDecimal + ';'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/common";

  $prefixCls: $progressBarPrefixCls;

  .#{$prefixCls}-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    & .#{$prefixCls} {
      width: 0;
      height: 2px;
      background-color: $color-theme;
      box-shadow: 0 0 5px rgba($color-theme, .7);
    }
    & .#{$prefixCls}-tip {
      background: $color-default;
      color: $color-light;
      padding: $distance-x-small;
    }
  }
</style>