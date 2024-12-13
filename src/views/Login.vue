<template>
  <div class="login">
    <h2>登录界面</h2>
    <button @click="toHome">登录</button>
  </div>
</template>

<script setup name="Login">
  import { useRouter } from "vue-router"

  const router = useRouter()

  const toHome = () => {
    // 只要是已加载了页面直接设置我们的 token
    localStorage.setItem("token", "sdfcjsdfjoisgoifjdsa")
    router.push({
      path: "/home",
      query: {

      }
    })
  }
</script>

<style scoped>

</style>