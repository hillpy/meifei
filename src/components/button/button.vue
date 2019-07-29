<template>
  <button :class="wrapperClasses" @click="handleClick">
    <icon :name="icon.name" size="icon.size" v-if="icon.name"></icon>
    <span v-if="title">{{ title }}</span>
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
      type: {
        type: String,
        default: 'default'
      },
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
        return [
          `${prefixCls}`,
          `${prefixCls}` + '-' + this.type
        ]
      }
    },
    methods: {
      handleClick (e) {
        e.preventDefault()
        this.$emit('buttonClick', e)
      }
    },
    created () {},
    mounted () {}
  }
</script>