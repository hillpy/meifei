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
  import name from '../../common/js/name'
  import utils from '../../common/js/utils'

  const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.loading.toLowerCase()

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
        return `${PREFIX_CLS}` + '-wrapper'
      }
    },
    methods: {
      createLoadingData (maxType, maxLoadingBar) {
        let loadingDataArr = []
        let dataObj = {}

        for (let i = 1; i <= maxType; i++) {
          dataObj.type = i
          dataObj.class = `${PREFIX_CLS}` + '-' + i
          dataObj.items = []
          let item = {}
          for (let j = 1; j <= maxLoadingBar; j++) {
            item.class = [
              `${PREFIX_CLS}` + '-bar-' + i,
              `${PREFIX_CLS}` + '-bar-' + i + '-' + j
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
  @import "../../common/style/loading";
</style>