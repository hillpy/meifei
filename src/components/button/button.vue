<template>
  <button :class="wrapperClasses" :style="styles" @click="handleClick">
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
      },
      size: {
        type: String,
        default: ''
      },
      radius: {
        type: String,
        default: ''
      },
      long: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    watch: {},
    computed: {
      wrapperClasses () {
        let wrapperClasses = []
        wrapperClasses.push(`${prefixCls}`)
        this.type && wrapperClasses.push(`${prefixCls}` + '-' + this.type)
        this.size && wrapperClasses.push(`${prefixCls}` + '-' + this.size)
        if (this.radius === 'circle') {
          wrapperClasses.push(`${prefixCls}` + '-' + this.radius)
        }
        if (this.long === true) {
          wrapperClasses.push(`${prefixCls}` + '-long')
        }
        return wrapperClasses
      },
      styles () {
        let styles = ''
        if (this.radius !== '' && this.radius !== 'circle') {
          styles += 'border-radius: ' + this.radius + '; '
        }
        return styles
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