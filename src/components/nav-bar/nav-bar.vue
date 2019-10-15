<template>
  <div :class="wrapperClasses">
    <div :class="barClasses" :style="barStyles">
      <div :class="iconBoxClasses">
        <icon :name="leftIcon.name" :position="leftIcon.position" :size="leftIcon.size" @iconClick="leftIcon.click"></icon>
      </div>
      <div :class="titleClasses"><slot name="title"></slot></div>
      <div :class="iconBoxClasses">
        <icon :name="rightIcon.name" :position="rightIcon.position" :size="rightIcon.size" @iconClick="rightIcon.click"></icon>
      </div>
    </div>
  </div>
</template>

<script>
  import name from '../../common/name'
  import Icon from '../icon/icon'

  const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.navBar.toLowerCase()

  export default {
    name: name.componentsName.navBar,
    components: {
      Icon
    },
    props: {
      maxWidth: {
        type: String,
        default: '750px'
      },
      leftIcon: {
        type: Object,
        default: () => {
          return {
            name: '',
            position: '',
            size: '',
            click: () => {

            }
          }
        }
      },
      rightIcon: {
        type: Object,
        default: () => {
          return {
            name: '',
            position: '',
            size: '',
            click: () => {

            }
          }
        }
      }
    },
    computed: {
      wrapperClasses () {
        return `${PREFIX_CLS}` + '-wrapper'
      },
      barClasses () {
        return `${PREFIX_CLS}`
      },
      titleClasses () {
        return `${PREFIX_CLS}` + '-title'
      },
      iconBoxClasses () {
        return `${PREFIX_CLS}` + '-icon-box'
      },
      barStyles () {
        let styles = ''
        if (this.maxWidth) {
          styles += 'maxWidth: ' + this.maxWidth + ';'
        }
        return styles
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/nav-bar";
</style>