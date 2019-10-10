<template>
  <span :class="wrapperClasses"></span>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.button.toLowerCase()

  export default {
    name: name.componentsName.badge,
    props: {
      type: {
        type: String,
        default: 'circle'
      },
      text: {
        type: String,
        default: ''
      }
    },
    computed: {
      wrapperClasses () {
        let wrapperClasses = []
        wrapperClasses.push(`${prefixCls}`)
        return wrapperClasses
      }
    }
    
  }
</script>

<style lang="scss">
</style>