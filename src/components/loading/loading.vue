<template>
  <div :class="wrapperClasses" v-show="show">
    <div :class="data.class" v-for="(data, index) in loadingData" :key="index" v-if="data.type == type">
      <div :class="item.class" v-for="(item, key) in data.items" :key="key"></div>
    </div>
  </div>
</template>

<script>
  import utils from '../../utils/utils'
  import name from '../../common/name'

  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.loading.toLowerCase()

  export default {
    name: name.componentsName.loading,
    props: {
      show: {
        type: Boolean,
        default: true
      },
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        loadingData: this.createLoadingData(2, 5)
      }
    },
    computed: {
      wrapperClasses () {
        return `${prefixCls}` + '-wrapper'
      }
    },
    methods: {
      createLoadingData (maxType, maxLoadingBar) {
        let loadingDataArr = []
        let dataObj = {}

        for (let i = 1; i <= maxType; i++) {
          dataObj.type = i
          dataObj.class = `${prefixCls}` + '-' + i
          dataObj.items = []
          let item = {}
          for (let j = 1; j <= maxLoadingBar; j++) {
            item.class = [
              `${prefixCls}` + '-bar-' + i,
              `${prefixCls}` + '-bar-' + i + '-' + j
            ]

            dataObj.items.push(utils.deepCopy(item))
          }

          loadingDataArr.push(utils.deepCopy(dataObj))
        }

        return loadingDataArr
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/common";

  $prefixCls: $loadingPrefixCls;

  .#{$prefixCls}-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: rgba($color-light, .5);
    & .#{$prefixCls}-1 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      & .#{$prefixCls}-bar-1 {
        width: 5px;
        height: 8px;
        border-radius: 5px;
        background-color: rgba($color-theme, .5);
        margin: 0 1px;
        animation: #{$prefixCls}-bar-1-animation 0.4s ease-in infinite alternate;
      }
      @for $i from 1 through 5 {
        & .#{$prefixCls}-bar-1-#{$i} {
          animation-delay: #{($i - 1) * 0.1} + 's';
        }
      }
    }
    & .#{$prefixCls}-2 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: flex-end;
      height: 30px;
      & .#{$prefixCls}-bar-2 {
        width: 5px;
        height: 0;
        background-color: rgba($color-theme, 0);
        margin: 0 1px;
        animation: #{$prefixCls}-bar-2-animation 0.5s ease-in-out infinite alternate;
      }
      @for $i from 1 through 5 {
        & .#{$prefixCls}-bar-2-#{$i} {
          animation-delay: #{($i - 1) * 0.1} + 's';
        }
      }
    }
  }

  @keyframes #{$prefixCls}-bar-1-animation {
    from {
      height: 8px;
      background-color: rgba($color-theme, .5);
    }
    to {
      height: 30px;
      background-color: rgba($color-theme, .8);
    }
  }
  @keyframes #{$prefixCls}-bar-2-animation {
    from {
      height: 0;
      background-color: rgba($color-theme, 0);
    }
    to {
      height: 30px;
      background-color: rgba($color-theme, .8);
    }
  }
</style>
