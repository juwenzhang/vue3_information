<template>
  <div class="dynamic-layout02">
    <SetupDemo01></SetupDemo01>
    <button @changeInfoDemo="changeInfo('message')"></button>
  </div>
</template>

<script setup name="DynamicComponentDemo02">
  import SetupDemo01 from "./UseSetupComponent/Setupdemo01.vue"
  import useApp from "./hooks/useApp.js"
  const { changeInfo } = useApp()
</script>

<style scoped>

</style>