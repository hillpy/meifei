<template>
  <div :class="wrapperClasses">
    <div :class="barClasses" :style="barStyles">
    </div>
  </div>
</template>

<script>
  import name from '../../common/name'
  import Icon from '../icon/icon'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.tabBar.toLowerCase()

  export default {
    name: name.componentsName.tabBar,
    components: {},
    props: {
      maxWidth: {
        type: String,
        default: '750px'
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
      barClasses () {
        return `${prefixCls}`
      },
      barStyles () {
        let styles = ''
        if (this.maxWidth) {
          styles += 'maxWidth: ' + this.maxWidth + ';'
        }
        return styles
      }
    },
    methods: {},
    created () {},
    mounted () {}
  }
</script>
