<template>
  <div class="NotFound">
    <h2>我是 NotFound 路由组件</h2>
    <button @click="toHome">返回首页</button>
  </div>
</template>

<script setup name="NotFound">
  import {useRouter} from "vue-router"
  const router = useRouter()

  const toHome = () => {
    router.push({
      path: "/home",
      query: {

      }
    })
  }
</script>

<style scoped></style>