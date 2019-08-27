<template>
  <div :class="wrapperClasses" v-show="show">
    <template v-for="(data, index) in loadingData">
      <div :class="data.class" :key="index" v-if="data.type == type">
        <div :class="item.class" v-for="(item, key) in data.items" :key="key"></div>
      </div>
    </template>
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
  @import "../../styles/loading";
</style>