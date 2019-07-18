<template>
  <div :class="wrapperClasses">
    <div :class="barClasses">
      <div :class="titleClasses"><slot name="title"></slot></div>
    </div>
  </div>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName + '-' + name.componentsName.navBar.toLowerCase()

  export default {
    name: name.componentsName.navBar,
    props: {

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
  @import "../../styles/common";

  $prefixCls: $navBarPrefixCls;

  .#{$prefixCls}-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    .#{$prefixCls} {
      width: $width-default;
      max-width: $width-default;
      height: $height-nav-bar;
      line-height: $height-nav-bar;
      position: relative;
      margin: 0 auto;
      padding: 0 $height-nav-bar;
      box-sizing: border-box;
      background: $color-theme;
      color: $color-light;
      font-size: $font-size-root;
      text-align: center;
      overflow: hidden;
      & .#{$prefixCls}-title {
        font-size: $font-size-medium;
        text-align: center;
        @include overflow-dot;
      }
    }
  }
</style>
