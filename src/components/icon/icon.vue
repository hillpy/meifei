<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
  import name from '../../common/name'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase()
  const sizeArr = [
    'xxx-small',
    'xx-small',
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large',
    'xxx-large'
  ]
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
        default: ''
      },
      custom: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes () {
        let classes = [
          `${prefixCls}`
        ]
        if (this.name) {
          classes.push(`${prefixCls}` + '-' + this.name)
        } else if (this.custom) {
          this.size || (this.size = 'small')
          if (sizeArr.indexOf(this.size) !== -1) {
            classes.push(`${prefixCls}` + '-size-' + this.size)
          }
        }
        return classes
      },
      styles () {
        let styles = ''
        if (this.name) {
          if (this.size && sizeArr.indexOf(this.size) === -1) {
            styles += 'font-size: ' + this.size + '; '
          }
        } else if (this.custom) {
          if (this.size && sizeArr.indexOf(this.size) === -1) {
            styles += 'width: ' + this.size + '; height: ' + this.size + '; '
          }
          styles += 'background-image: url(' + this.custom + '); '
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