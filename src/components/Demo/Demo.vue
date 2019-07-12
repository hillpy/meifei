<template>
  <div class="demo">{{ message }}</div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      message: 'This is a demo component.'
    }
  }
}
</script>

<style>
  .demo {
    color: #f00;
  }
</style>