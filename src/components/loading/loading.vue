<template>
  <div :class="wrapperClasses" v-show="isShow">
    <div :class="loadingClasses">
      
    </div>
  </div>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName + '-' + name.componentsName.loading.toLowerCase()

  export default {
    name: name.componentsName.loading,
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
      return {
        isShow: this.show
      }
    },
    computed: {
      wrapperClasses () {
        return `${prefixCls}` + '-wrapper'
      },
      loadingClasses () {
        return `${prefixCls}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/common";

  $prefixCls: $loadingPrefixCls;

  .#{$prefixCls}-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: rgba($color-light, .2);
    .#{$prefixCls} {
      
    }
  }
</style>
