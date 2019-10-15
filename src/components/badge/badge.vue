<template>
  <span :class="wrapperClasses"></span>
</template>

<script>
  import name from '../../common/js/name'

  const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.button.toLowerCase()

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
        wrapperClasses.push(`${PREFIX_CLS}`)
        return wrapperClasses
      }
    }
    
  }
</script>

<style lang="scss">
</style>