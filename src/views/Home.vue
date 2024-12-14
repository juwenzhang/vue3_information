<template>
  <div class="Home">
    <h2>我是 Home 路由组件</h2>
    <h2>{{ storeCounter }}-{{ storeName }}-{{ storeAge }}</h2>
    <h2>{{ SMCounter }}-{{ SMName }}-{{ SMAge }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup name="Home">
  import { useStore, mapState } from "vuex"
  import { computed } from "vue";

  const store = useStore()

  const storeCounter = computed(() => {
    return store.state.counter
  })

  const storeName = computed(() => {
    return store.state.name
  })

  const storeAge = computed(() => {
    return store.state.age
  })

  // 通过映射回来的都是一些函数
  // 同时在组合式的写法中，计算属性就是传递的是函数
  // 同时我们为了减轻元素中的逻辑，我们状态管理的变量就是通过的是我们的计算属性来实现的
  const { counter, name, age } = mapState(["counter", "name", "age"])
  // 每个函数内部的查找的规则是通过 this.$store。state 来查找的我们的属性
  const SMCounter = computed(counter.bind({$store: useStore()}))
  const SMName = computed(name.bind({$store: useStore()}))
  const SMAge = computed(age.bind({$store: useStore()}))

  function increment() {
    // commit 的字符串是我们的状态管理工具中提供的 mutation 函数
    store.commit("increment")
  }
</script>

<style scoped></style>