<template>
  <div class="reactive">
    <h2>{{ message }}</h2>
    <h2>{{ age }}-{{ name }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年纪</button>
  </div>
</template>

<script>
  import useDataReactive from "../hooks/useDataReactive.js"
  export default {
    name: "DataShowReactive",
    setup() {
      return {
        ...useDataReactive()
      }
    }
  }
</script>

<style scoped>
  .reactive {
    background-color: orange;
  }
</style>