<template>
  <div class="control-show">
    <div class="show-button">
      <button @click="changeIndex(0)">显示没有setup 的组件</button>
      <button @click="changeIndex(1)">显示具有setup 的组件</button>
      <button @click="changeIndex(2)">展示小的DEMO练习组件</button>
    </div>
    <div class="content">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script setup name="ControlShow">
  // 点定义一个数组
  import {computed, ref} from "vue"
  import DynamicComponentDemo01 from "./DynamicComponent01.vue"
  import DynamicComponentDemo02 from "./DynamicComponent02.vue"
  import DynamicComponentDemo03 from "./DynamicComponent03.vue"

  let CurrentIndex = ref(0)
  const ComponentsArr = [
    DynamicComponentDemo01,
    DynamicComponentDemo02,
    DynamicComponentDemo03
  ]
  const changeIndex = (index) => {
    CurrentIndex.value = index
  }
  const currentComponent = computed(() => {
    return ComponentsArr[CurrentIndex.value]
  })
</script>

<style scoped>
  .control-show {
    background: darkred;

    .show-button {
      display: flex;

      button {
        flex: 1;
      }
    }
  }
</style>