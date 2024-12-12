> * 注意我们的该部分的案例想要看源码的话
> * 把我们的 src/components 以及  src/hooks 结合看，否则就会很迷惑的
> * 本章节主要是领略一些关于我们的书写代码的规范性问题，以及体验一些 hooks 罢了
> * 因为后面的话，大家可能会把 hooks 和 utils(tools) 区分出错
> * 所以说就在这里我们来进行书写一些简单的案例来简单的展示一哈
> * 同时我们还会进行规范单向数据流的代码书写以及强调


## setup 函数的使用


### 回顾 vue2
> * **学习组件的嵌套使用**
> * **学习组件的通信**
> * **学习组件中的内置指令**
>   * v-show
>   * v-if
>   * v-model
>   * v-for
>   * v-on
>   * v-bind
> * **事件总线**
> * **学习插槽的使用**
> * **生命周期的掌握**
> * **ref 实现获取我们的元素**
> * **动态组件的使用**
> * keep-alive 的使用
> * 异步组件（后面使用的是我们的**路由懒加载**来实现的）


### Composition API (vue3)
> * 首先我们前面的学习的是我们的 options api
> * 但是我们现在的使用的是我们的 **composition api** 了
> * 所以说我们现在的 composition api 十分重要了，
>   * 但是同时其也是完全支持我们的 vue2 的书写的
> * options api 中具备的常用选项含有
>   * data
>   * props
>   * methods
>   * computed
>   * watch
>   * created
>   * mounted
> * 为什么使用 composition api
>   * 是因为使用该方法可以实现的是我们的可以把 JS / TS 逻辑实现抽离实现
>   * 这样更利于我们的工程化开发的实现
>   * 从而达到我们的项目的可维护性以及代码的复用率的提高
>   * 同时我们还是可以实现的是我们的将自己的代码的代码可读性的提高
>   * 同时提供了我们的 **setup** 的语法糖，来便捷我们的开发


### setup 函数的初使用
> * setup 函数默认是具备我们的两个参数的
>   * 第一个参数就是我们的 **props** 
>   * 第二个参数就是我们的 **context**
> * props 是什么呐？？？
>   * 就是我们的**父组件向我们子组件**传递过来的两个数据
>   * 在 vue3 同时我们需要知道的是严格抵制使用我们的 this 的
> * context
>   * 是一个对象，执行上下文
>   * 其具备三个属性
>     * 第一个是我们的 **attrs** 属性
>       * 所有的非 props 的属性
>     * 第二个是我们的 **slots** 属性
>       * 父组件传递的插槽
>     * 第三个是我们的 **emit** 属性
>       * 组件内部需要发生的一些事件，事件触发的时候会使用我们的 emit
> * 使用我们的 setup 的话
>   * 内部需要提供给外部使用的的数据需要进行返回即可
>   * 这样后我们的外部就可以使用我们的数据了
```vue
<template>
  <div class="app">
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
  .app div {
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
</style>
```

### setup 函数的具体使用
#### setup 定义非响应式数据
> * 在我们的 setup 中实现定义的所有的数据都不是响应式的数据
>   * 所以说就不可以通过一些事件来进行修改我们的数据的
> * 同时在我们的 setup 函数定义的数据，需要通过 return 返回值
>   * 返回后才可以提供给外部使用


#### 定义响应式数据
##### 通过函数 **reactive** 来实现定义响应式数据
> * `import { reactive } from "vue""`
> * 我们这个时候就可以通过 reactive 来实现定义我们的响应式数据了
>   * reactive 是用来实现的是定义我们的复杂类型数据的响应式数据
>   * 对象类型/数组类型都是可以的


##### 通过函数 **ref** 来实现定义我们的响应式数据
> * ref 可以实现定义的响应式数据含有我们的简单类型的数据，还有我们的复杂类型的数据
>   * 但是通过我们的 ref 定义的数据必须通过我们的 .value 来实现进行修改我们的数据


#### 单向数据流
> * 同时在我们的 vue 或者 react 中还具备我们的单项数据流
> * 也就是说我们的数据的修改，是不会使用我们的在子组件中进行修改我们的数据的
> * 如果需要进行修改的话，那就需要我们进行使用单项数据流，从子组件中
> * 传回父组件中进行后续的修改操作，这个就是单项数据流的概念
>   * 在我们的开发中，我们知道一点
>   * vue3 是不可以发送我们的事件的 this.$emit
>   * 但是前面我们的说过，vue3 默认给我们提供了 props,以及 context 参数的
>     * 同时 context 参数是可以替代我们发送事件的
>     * 所以说我们就可以使用 context.emit 来实现发送以前的事件
> * 同时我们在进行传递我们的数据的时候
>   * 我们是可以通过我们的添加 readonly 属性来进行限制子组件中进行的修改的


#### 其他函数的补充
> * **isProxy** 来实现判断的是我们的对象是否是我们的 Proxy 对象
> * **isReactive** 用来判断的是否是通过我们的 isReactive 定义的响应式数据
> * **isReadonly** 判断我们的方法是否是只读的
> * **toRaw** 来实现的获取我们的原始对象（用来进行调试的方法）


#### toRefs 方法的使用
> * 使用的场景就是我们的通过 reactive 定义的响应式数据本身是具有响应式的
> * 但是如果说通过我们的 解构获取的值的话，我们的数据就不具备响应式了
>   * 但是为了我们的数据还具备响应式，这个时候就需要进行的是通过 toRefs 来实现专为响应式
>   * 然后再进行使用即可,同时这样操作后，我们的数据就是 ref 定义的响应式数据了


#### setup函数 中的 computed(计算属性) 
> * computed 就是实现的是我们的将具有一定的逻辑的属性进行抽离的写法
> * 从而来实现减少我们的减少元素中的重量，以及便于我们的维护
> * 这里面的话就是实现的是使用我们的 computed 函数来实现定义我们的计算属性
>   * 同时我们的内部可以传入我们的函数
>     * 这个时候就是在我们的 getter 语法了
>   * 同时我们还是可以书写对象的
>     * 书写对象的时候，我们可以书写我们的 getter 语法以及 setter 语法的
>   * 同时我们的 computed 定义的数据是响应式数据，并且是我们的 ref 类型的响应式数据


### setup 函数中的生命周期函数钩子
> * 在我们的组合式 api 中，我们实现生命周期函数的方法是
>   * 在选项式 api 的生命周期函数前添加 on 即可
> * 生命周期的具体体现
>   * onMounted 挂载后的生命期函数
> * 注意我们的选项式的 api 的生命周期的话都是使用的是我们的对象形式实现的书写
>   * 或者说非 function 函数的书写
>   * 但是我们的组合式 api 中实现的是我们的使用我们的回调函数的形式进行书写的
> * 但是这里需要知道的是我们的生命周期函数的话
>   * 关于具体的创建的生命周期钩子是被取消了的
>   * 被整合到了我们的 setup 中了的
>   * 所以说我们就不用再进行定义我们的创建的生命周期钩子中去了


#### 组件通信 provide 以及 inject (不重要 ‘知道有即可’)
> * 在组件之间的透传的话还是可以使用 provide 以及 inject 的
> * 但是我们的这两个函数在我们的透传只是适合小型项目，对于我们的大型项目不行
> * 大型的项目的话使用我们的 **pinia** 或者 **vuex** 状态管理库即可
>   * react 中的状态管理库是 **redux**
> * 注意这两个直接是函数式的写法


### setup 函数中侦听数据变化
#### watch composition
> * 在以前的 vue2 options api 中侦听数据变化是通过我们的 watch option 来实现的
> * 但是在我们的 composition api 我们就是使用的是 watch 函数来实现的监听了
> * `watch(监听的数据或者通过函数指定需要被监听的数据, callback[, config])`

#### watchEffect composition
**[watch 和 watchEffect 的区别](https://juejin.cn/post/7401415643981185078?searchId=20241212070504A7B10FAFFC1EB0C34719)**


## setup 语法糖的使用
> * 就是实现的是将我们的 setup 书写在我们的 script 标签中
> * 以及在我们的 script 标签中书写我们的组件的名称
>   * 这样书写后，我们的代码结构更加的简洁
>   * 同时有利于我们的全面的兼容 TypeScript
>   * 同时更好的集成开发环境
>   * 更利于我们实现抽离 hooks

### 接收父组件传入的属性方法 defineProps
> * 就是使用我们的方法 defineProps 方法，宏函数，不需要进行导入
> * `const props = defineProps({})`

### 定义我们发出的事件 defineEmits
> * 就是通过的是我们的使用我们的宏函数 defineEmits 方法来实现
> * `const emits = defineEmits([])`

### 实现暴露我们的组件中的方法 defineExpose
> * 这个时候我们就可以实现的是我们的在一个组件中获取另一个组件的实例并且调用内部暴露的方法了
> * `defineExpose({})`
