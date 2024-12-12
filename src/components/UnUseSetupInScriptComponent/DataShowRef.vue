<template>
  <div class="ref">
    <h2>{{ message }}</h2>
    <h2>{{ complexData.age }}</h2>
    <h2>{{ complexData.name }}</h2>
    <button @click="changeMessage">修改我们的信息</button>
    <div>{{ name }}</div>
    <button @click="changeInfo">修改名字</button>
  </div>
</template>

<script>
  import {useDataRef} from "../hooks/useDataRef.js";
  export default {
    name: "DataShowRef",
    emits: ["changeInfo"],
    props: {
      info: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props, context) {
      return {
        ...useDataRef(props, context),
      }
    }
  }
</script>

<style scoped>
  .ref {
    background: coral;
  }
</style>