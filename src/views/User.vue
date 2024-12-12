<template>
  <div class="User">
    <template v-if="$route.params.username">
      <h2>我是 User: {{ $route.params.username }} 路由组件</h2>
    </template>
    <template v-else>
      <h2>我是 User 路由组件</h2>
    </template>
  </div>
</template>

<script setup name="User">
  import { useRoute, onBeforeRouteUpdate } from "vue-router"

  const route = useRoute()
  console.log(route.params.username)

  onBeforeRouteUpdate((to, from) => {
    console.log(to.params.username)
    console.log(from.params.username)
  })
</script>

<style scoped></style>