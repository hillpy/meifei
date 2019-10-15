<template>
  <sup :class="wrapperClasses">
    <slot name="content" v-if="useSlot"></slot>
    {{ handleText() }}
  </sup>
</template>

<script>
  import name from '../../common/js/name'

  const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.badge.toLowerCase()

  export default {
    name: name.componentsName.badge,
    props: {
      text: {
        type: String,
        default: ''
      },
      dot: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        useSlot: false
      }
    },
    created () {
      if (this.dot === false && this.$slots.content) {
        this.useSlot = true
      }
    },
    computed: {
      wrapperClasses () {
        let wrapperClasses = []
        wrapperClasses.push(`${PREFIX_CLS}`)
        if (this.dot === true) {
          wrapperClasses.push(`${PREFIX_CLS}` + '-dot')
        }
        return wrapperClasses
      }
    },
    methods: {
      handleText () {
        if (this.dot === false && this.useSlot === false) {
          return this.text
        }
        return ''
      }
    }
  }
</script>

<style lang="scss">
  @import "../../common/style/badge";
</style>