<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
  import name from '../../common/name'
  import back from '../../assets/images/icons/back.png'
  import menu from '../../assets/images/icons/menu.png'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase()
  const iconObj = {
    back: back,
    menu: menu
  }
  const positionObj = {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    leftTop: ['left', 'top'],
    rightTop: ['right', 'top'],
    leftBottom: ['left', 'bottom'],
    rightBottom: ['right', 'bottom']
  }
  const sizeObj = {
    XXXSmall: '5px',
    XXSmall: '10px',
    XSmall: '15px',
    small: '20px',
    medium: '25px',
    large: '30px',
    XLarge: '35px',
    XXLarge: '40px',
    XXXLarge: '45px'
  }

  export default {
    name: name.componentsName.icon,
    props: {
      name: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'XSmall'
      }
    },
    computed: {
      classes () {
        return `${prefixCls}`
      },
      styles () {
        let styles = ''
        if (this.name && iconObj.hasOwnProperty(this.name)) {
          styles += 'background-image: url(' + iconObj[this.name] + '); '
        }
        if (this.position && positionObj.hasOwnProperty(this.position)) {
          styles += 'position: absolute; '
          if (positionObj[this.position] instanceof Array) {
            positionObj[this.position].map((item, key) => {
              styles += item + ': 0; '
            })
          } else {
            styles += positionObj[this.position] + ': 0; '
          }
        }
        if (this.size && sizeObj.hasOwnProperty(this.size)) {
          styles += 'width: ' + sizeObj[this.size] + '; height: ' + sizeObj[this.size] + ';'
        }
        return styles
      }
    },
    methods: {
      handleClick (e) {
        this.$emit('iconClick', e)
      }
    }
  }
</script>