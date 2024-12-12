<template>
  <h2>我是演示组件</h2>
</template>

<script>
  import useSetupLifeCycle from "../hooks/useSetupLifeCycle.js"
  export default {
    name: "SetupLifeCycle",
    setup() {
      useSetupLifeCycle()
    }
  }
</script>

<style scoped>

</style>