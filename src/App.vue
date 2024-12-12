<template>
  <div class="app">
    <Counter></Counter>
    <DataShowReactive></DataShowReactive>
    <DataShowRef :info="readonly(info)" @change-info="changeInfo('433')"></DataShowRef>

    <SetupComputed></SetupComputed>
    <SetupLifeCycle v-if="isShow"></SetupLifeCycle>
    <button @click="changeStatus">决定组件是否展示</button>

    <SetupWatch></SetupWatch>

    <SetupDemo01></SetupDemo01>
    <button @changeInfo=""></button>
  </div>
</template>

<script setup name="App">
  import Counter from "./components/UnUseSetupInScriptComponent/Counter.vue"
  import DataShowReactive from "./components/UnUseSetupInScriptComponent/DataShowReactive.vue"
  import DataShowRef from "./components/UnUseSetupInScriptComponent/DataShowRef.vue"
  import SetupComputed from "./components/UnUseSetupInScriptComponent/SetupComputed.vue"
  import SetupLifeCycle from "./components/UnUseSetupInScriptComponent/SetupLifeCycle.vue"
  import SetupWatch from "./components/UnUseSetupInScriptComponent/SetupWatch.vue"
  import SetupDemo01 from "./components/UseSetupComponent/Setupdemo01.vue"
  import useApp from "./components/hooks/useApp"
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