<template>
  <div class="Home">
    <h2>我是 Home 路由组件</h2>
    <h2>{{ storeCounter }}-{{ storeName }}-{{ storeAge }}</h2>
    <h2>{{ SMCounter }}-{{ SMName }}-{{ SMAge }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>
    <h2>{{ SMDoubleGetters }}-{{ SMMessageGetters }}</h2>
    <button @click="increment">+1</button>
    <button @click="incrementAction">+1</button>
    <button @click="changeName">修改Name</button>
    <button @click="change_name">修改Name</button>
    <button @click="changeNameAction">修改Name</button>
  </div>
</template>

<script setup name="Home">
  import {useStore, mapState, mapGetters, mapMutations} from "vuex"
  import { computed } from "vue";
  import {CHANGE_NAME} from "../store/mutationType.js";

  const store = useStore()

  const changeName = function() {
    store.commit(CHANGE_NAME, "76433")
  }

  const fetchAction = async function() {
    const data = await store.dispatch("fetchDataAction")
    console.log(data)
  }

  fetchAction()

  const change_name = computed(mapMutations(["CHANGE_NAME"]).CHANGE_NAME
      .bind({ $store: store }, ["76433"]))

  function increment() {
    // commit 的字符串是我们的状态管理工具中提供的 mutation 函数
    store.commit("increment")
  }

  function changeNameAction() {
    store.dispatch("changeNameAction", "76433")
  }

  function incrementAction() {
    store.dispatch("incrementAction")
  }

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

  const { doubleCounter, message } = mapGetters(["doubleCounter", "message"])
  const SMDoubleGetters = computed(doubleCounter.bind({ $store: useStore() }))
  const SMMessageGetters = computed(message.bind({ $store: useStore() }))
</script>

<style scoped></style>