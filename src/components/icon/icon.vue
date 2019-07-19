<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase()

  export default {
    name: name.componentsName.icon,
    props: {
      name: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'medium'
      }
    },
    data () {
      return {
      }
    },
    watch: {},
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}` + '-' + this.name
        ]
      },
      styles () {
        return ''
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e)
      }
    },
    created () {},
    mounted () {}
  }
</script>
<style lang="scss" scoped>
  @import "../../styles/common";

  $prefixCls: $iconPrefixCls;

  // $iconMap: (
  //   back: '../../assets/images/icons/back.png',
  //   menu: '../../assets/images/icons/menu.png'
  // );

  // .#{$prefixCls} {
  //   background: url('../src/assets/images/icons/back.png');
  // }

  // @each $key, $value in $iconMap {
  //   .#{$prefixCls}-#{$key} {
  //     background: url('~/src/assets/images/icons/back.png');
  //   }
  // }
</style>