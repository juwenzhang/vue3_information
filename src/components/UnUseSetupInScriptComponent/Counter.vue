<template>
  <div class="counter">
    <div>我们需要修改的数据为: {{ counter }}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import useCounter from "../hooks/useCounter.js"
  export default {
    name: "Counter",
    // 开始实现使用我们的 setup
    setup() {
      const {counter, increment, decrement} = useCounter()
      return {
        counter,
        increment,
        decrement
      }
    }
  }
</script>

<style scoped>
  .counter  {
    background: deepskyblue;
    div {
      color: red;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>