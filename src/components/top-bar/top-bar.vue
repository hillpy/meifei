<template>
  <div :class="wrapClasses">
    <span :class="titleClasses"><slot name="title"></slot></span>
  </div>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName + '-' + name.componentsName.topBar.toLowerCase()

  export default {
    name: name.componentsName.topBar,
    props: {

    },
    data: function () {
      return {

      }
    },
    computed: {
      wrapClasses () {
        return `${prefixCls}`
      },
      titleClasses () {
        return `${prefixCls}` + '-title'
      }
    },
    methods: {
      
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/variable";

  $prefixCls: $topBarPrefixCls;

  .#{$prefixCls} {
    width: $width-default;
    height: auto;
    text-align: center;
    box-sizing: border-box;
    background: $color-theme;
    color: $color-light;
    font-size: $font-size-root;
    & .#{$prefixCls}-title {
      font-size: $font-size-medium;
    }
  }
</style>
