<template>
  <div :class="wrapperClasses">
    <div :class="barClasses">
      <div :class="iconBoxClasses">
        <icon :name="leftIcon.name" :position="leftIcon.position" :size="leftIcon.size" @iconClick="leftIcon.click"></icon>
      </div>
      <div :class="titleClasses"><slot name="title"></slot></div>
      <div :class="iconBoxClasses">
        <icon :name="rightIcon.name" :position="rightIcon.position" :size="rightIcon.size" @iconClick="rightIcon.click"></icon>
      </div>
    </div>
  </div>
</template>

<script>
  import name from '../../common/name'
  import Icon from '../icon/icon.vue'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.navBar.toLowerCase()

  export default {
    name: name.componentsName.navBar,
    components: {
      Icon
    },
    props: {
      leftIcon: {
        type: Object,
        default: () => {
          return {
            name: '',
            position: '',
            size: 'small',
            click: () => {

            }
          }
        }
      },
      rightIcon: {
        type: Object,
        default: () => {
          return {
            name: '',
            position: '',
            size: 'small',
            click: () => {

            }
          }
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
      titleClasses () {
        return `${prefixCls}` + '-title'
      },
      iconBoxClasses () {
        return `${prefixCls}` + '-icon-box'
      }
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
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: $width-default;
      max-width: $width-default;
      height: $height-nav-bar;
      line-height: $height-nav-bar;
      position: relative;
      margin: 0 auto;
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
      & .#{$prefixCls}-icon-box {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: $height-nav-bar;
        height: $height-nav-bar;
      }
    }
  }
</style>
