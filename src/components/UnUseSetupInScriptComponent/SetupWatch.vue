<template>
  <div class="watch">
    <h2>{{ message }}</h2>
    <button @click="changeMessage('hello world')">修改信息</button>
    <h2>{{ info.name }}</h2>
    <button @click="changeInfo('76433')">修改姓名</button>
  </div>
</template>

<script>
  import useSetupWatch from '../hooks/useSetupWatch.js'
  export default {
    name: "SetupWatch",
    setup() {
      return {
        ...useSetupWatch()
      }
    }
  }
</script>