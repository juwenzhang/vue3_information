<template>
  <div class="admin">
    <h2>Admin 组件</h2>
    <button @click="toHome">返回首页</button>
  </div>
</template>

<script setup name="Admin">
  import {useRouter} from "vue-router"

  // 获取我们的路由对象
  const router = useRouter()

  const toHome = () => {
    router.push({
      path: "/home",
      query: {}
    })
  }
</script>

<style scoped></style>