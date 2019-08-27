<template>
  <div :class="wrapperClasses">
    <ul :class="barClasses" :style="barStyles">
      <li :class="itemClasses(data)" v-for="(data, key) in itemDatas" :key="key" @click="handleClick(key)">
        <div :class="itemConClasses">
          <icon :name="handleName(data)" :custom="handleCustom(data)" :size="handleSize(data)" :animated="handleAnimated(data)" :animation="handleAnimation(data)"></icon>
          <span :style="titleStyles">{{ data.title }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import utils from '../../utils/utils'
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
        default: ''
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
      },
      autoUpdate: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        defaultItemData: {
          title: '',
          titleSize: '',
          icon: {
            unselected: '',
            selected: ''
          },
          custom: {
            unselected: '',
            selected: ''
          },
          iconSize: '20px',
          selected: true,
          animated: true,
          animation: 'scale'
        },
        itemDatas: []
      }
    },
    watch: {
      datas: {
        handler (val) {
          this.itemDatas = this.handleDatas(this.datas)
        },
        deep: true
      }
    },
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
      handleDatas (datas) {
        let newDatas = []
        for (let i = 0, len = datas.length; i < len; i++) {
          newDatas.push(utils.updateObj(utils.deepCopy(this.defaultItemData), datas[i]))
        }
        return newDatas
      },
      handleClick (key) {
        if (this.autoUpdate === true) {
          for (let i = 0, len = this.itemDatas.length; i < len; i++) {
            if (i === key) {
              this.itemDatas[i].selected = true
            } else if (this.itemDatas[i].selected === true) {
              this.itemDatas[i].selected = false
            }
          }
        }
        this.$emit('itemClick', key)
      },
      handleName (data) {
        let name = ''
        if ((data.custom.unselected == '' && data.custom.selected == '') && (data.icon.unselected != '' && data.icon.selected != '')) {
          name = data.selected === true ? data.icon.selected : data.icon.unselected
        }
        return name
      },
      handleCustom (data) {
        let custom = ''
        if (data.custom.unselected != '' && data.custom.selected != '') {
          custom = data.selected === true ? data.custom.selected : data.custom.unselected
        }
        return custom
      },
      handleSize (data) {
        let size = ''
        if (data.iconSize) {
          size = data.iconSize
        } else if (this.iconSize) {
          size = this.iconSize
        }
        return size
      },
      handleAnimated (data) {
        let animated = false
        if (data.selected === true) {
          animated = true
        }
        return animated
      },
      handleAnimation (data) {
        let animation = 'scale'
        if (data.animation) {
          animation = data.animation
        }
        return animation
      }
    },
    created () {
      this.itemDatas = this.handleDatas(this.datas)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/tab-bar";
</style>