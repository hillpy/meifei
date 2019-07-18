<template>
  <div :class="wrapperClasses">
    <div :class="barClasses" :style="barStyles"></div>
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
      }
    },
    data () {
      return {
      }
    },
    computed: {
      wrapperClasses () {
        return `${prefixCls}` + '-wrapper'
      },
      barClasses () {
        return `${prefixCls}`
      },
      barStyles () {
        let decimal = 0
        decimal = this.decimal > 1 ? 1 : this.decimal
        return 'width: ' + (decimal * 100) + '%'
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
    background-color: $color-light;
    & .#{$prefixCls} {
      width: 0;
      height: 2px;
      background-color: $color-theme;
    }
  }
</style>