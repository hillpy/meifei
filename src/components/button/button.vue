<template>
  <div :class="wrapperClasses" @click="handleClick">
    <div :class="titleClasses">{{ title }}</div>
  </div>
</template>

<script>
  import name from '../../common/name'
  import Icon from '../icon/icon.vue'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.button.toLowerCase()

  export default {
    name: name.componentsName.button,
    components: {
      Icon
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    watch: {},
    computed: {
      wrapperClasses () {
        return `${prefixCls}` + '-wrapper'
      },
      titleClasses () {
        return `${prefixCls}` + '-title'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('buttonClick', e)
      }
    },
    created () {},
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/common";

  $prefixCls: $iconPrefixCls;

  .#{$prefixCls}-wrapper {
    
    .#{$prefixCls}-title {
      
    }
  }
</style>