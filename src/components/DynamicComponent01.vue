<template>
  <div class="dynamic-layout01">
    <Counter></Counter>
    <DataShowReactive></DataShowReactive>
    <DataShowRef :info="readonly(info)" @change-info="changeInfo('433')"></DataShowRef>

    <SetupComputed></SetupComputed>
    <SetupLifeCycle v-if="isShow"></SetupLifeCycle>
    <button @click="changeStatus">决定组件是否展示</button>

    <SetupWatch></SetupWatch>
  </div>
</template>

<script setup name="App">
  import Counter from "./UnUseSetupInScriptComponent/Counter.vue"
  import DataShowReactive from "./UnUseSetupInScriptComponent/DataShowReactive.vue"
  import DataShowRef from "./UnUseSetupInScriptComponent/DataShowRef.vue"
  import SetupComputed from "./UnUseSetupInScriptComponent/SetupComputed.vue"
  import SetupLifeCycle from "./UnUseSetupInScriptComponent/SetupLifeCycle.vue"
  import SetupWatch from "./UnUseSetupInScriptComponent/SetupWatch.vue"
  import useApp from "./hooks/useApp.js"
  import {readonly} from "vue"
  const { info, changeStatus, isShow, changeInfo } = useApp()
</script>

<style scoped>
.app {
  width: 60%;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0
}
</style>