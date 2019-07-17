<template>
  <div>
    <nav-bar>
      <template slot="title">
        这是一个导航组件，目前固定于顶部。
      </template>
    </nav-bar>
    <loading :show="true"></loading>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        
      }
    }
  }
</script>