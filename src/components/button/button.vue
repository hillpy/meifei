<template>
  <button :class="wrapperClasses" @click="handleClick">
    <icon :name="icon.name" size="icon.size"></icon>
    <span :class="titleClasses">{{ title }}</span>
  </button>
</template>

<script>
  import name from '../../common/name'
  import Icon from '../icon/icon'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.button.toLowerCase()

  export default {
    name: name.componentsName.button,
    components: {
      Icon
    },
    props: {
      icon: {
        type: Object,
        default: () => {
          return {
            name: '',
            size: ''
          }
        }
      },
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