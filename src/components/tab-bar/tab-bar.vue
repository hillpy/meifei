<template>
  <div :class="wrapperClasses">
    <ul :class="barClasses" :style="barStyles">
      <li :class="itemClasses(data)" v-for="(data, key) in datas" :key="key" @click="handleClick">
        <div :class="itemConClasses">
          <icon :name="data.selected === true ? data.icon.selected : data.icon.unselected"></icon>
          <span>{{ data.title }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import name from '../../common/name'
  import Icon from '../icon/icon'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.tabBar.toLowerCase()

  export default {
    name: name.componentsName.tabBar,
    components: {
      Icon
    },
    props: {
      maxWidth: {
        type: String,
        default: '750px'
      },
      datas: {
        type: Array,
        default: () => {
            return []
        }
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
      },
      itemClasses () {
        return (data) => {
          let classes = []
          classes.push(`${prefixCls}` + '-item')
          if (data.selected === true) {
            classes.push(`${prefixCls}` + '-selected')
          }
          return classes
        }
      },
      itemConClasses () {
        return `${prefixCls}` + '-item-content'
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('itemClick', e)
      }
    },
    created () {},
    mounted () {}
  }
</script>
