<template>
  <div class="setupComputed">
    <h2>{{ firstName }}-{{ lastName }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="changeFullName('juwenzhang-76433')">修改全名</button>
  </div>
</template>

<script>
  import useSetupComputed from "../hooks/useSetupComputed.js";
  export default {
    name: "SetupComputed",
    setup() {
      return {
        ...useSetupComputed()
      }
    }
  }
</script>

<style scoped>
  .setupComputed {
    background: red;
  }
</style>