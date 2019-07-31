<template>
  <div :class="wrapperClasses">
    <ul :class="barClasses" :style="barStyles">
      <li :class="itemClasses(data)" v-for="(data, key) in datas" :key="key" @click="handleClick(key)">
        <div :class="itemConClasses">
          <icon :name="data.selected === true ? data.icon.selected : data.icon.unselected" :size="iconSize"></icon>
          <span :style="titleStyles">{{ data.title }}</span>
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
      height: {
        type: String,
        default: ''
      },
      iconSize: {
        type: String,
        default: '20px'
      },
      titleSize: {
        type: String,
        default: ''
      },
      datas: {
        type: Array,
        default: () => {
            return []
        }
      },
      hideLine: {
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
        return `${prefixCls}` + '-wrapper'
      },
      barClasses () {
        let classes = []
        if (this.hideLine === false) {
          classes.push(`${prefixCls}`)
        } else {
          classes.push(`${prefixCls}` + '-no-line')
        }
        return classes;
      },
      barStyles () {
        let styles = ''
        if (this.maxWidth) {
          styles += 'maxWidth: ' + this.maxWidth + '; '
        }
        if (this.height) {
          styles += 'height: ' + this.height + '; '
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
      },
      titleStyles () {
        let styles = ''
        if (this.titleSize) {
          styles += 'font-size: ' + this.titleSize + ';'
        }
        return styles
      }
    },
    methods: {
      handleClick (key) {
        this.$emit('itemClick', key)
      }
    },
    created () {},
    mounted () {}
  }
</script>
