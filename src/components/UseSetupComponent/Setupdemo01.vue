<template>
  <div class="demo01">
    <h3>{{ message }}</h3>
    <button @click="[changeMessage,changeInfo]">修改信息</button>
  </div>
</template>

<script setup name="SetupDemo01">
  import {ref} from "vue";

  const message = ref("hello world")

  let changeMessage = () => {
    message.value = message.value === "hello world" ? 'hello vue|react' : "Hello World"
  }

  const props = defineProps({
    name: {
      type: String,
      default: "hello world"
    },
    age: {
      type: Number,
      default: 0
    }
  })

  const emits = defineEmits(["changeInfoDemo"])
  const changeInfo = (message) => {
    emits("changeInfoDemo", message)
  }

  defineExpose({
    emits
  })
</script>

<style scoped>

</style>