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
> * 同时需要主要注意的是通过我们的 reactive 定义的响应式数据结构后就不是响应式数据了


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

## vue router 的使用
> * 这个就是实现的是编写我们的路由
> * 路由就是用来实现的是我们的进行前端页面的切换
>   * 在最开始的时候我们的页面的切换是通过我们的后端路由进行渲染
>   * 但是现在的话我们就是使用的是我们的通过前端路由进行的页面渲染
> * 但是在现在的后端开发中任然也是需要开发后端路由的
>   * 后端路由的话就是实现的是和前端路由进行一一对应的
>   * 前端路由通过对对应的后端路由发送请求响应，从而实现整个项目的开发

### 前端路由的发展过程
> * 在进行我们的架构一个网络的时候，我们是需要进行的是实现我们的路由器以及交换机
> * 路由器主要进行的是维护我们的一个映射表
>   * 从而实现我们的路由的跳转
>   * 映射表会帮助我们决定数据在网络中的流向
>   * 同时路由器之间进行查找的实现，是通过的是我们的 ip 地址进行的查找来实现的
>     * ip 地址就是由我们的**主机地址 + 网络地址**构成的

#### 后端路由（后端渲染）
> * 一个网站是由我们的多个网页构成的
> * 然后后端给我们进行下载就是从服务器获取得到的 html 文本
> * 从而实现最终的网页的渲染
> * 所以说就有了以前的前后端不分离的开发模式，纯牛马开发模式
>   * 每一个 url 映射 一个html 网页
>   * 这个就是我们的后端路由，
>   * 通过后端来实现映射每一个 url 和 html网页之间的对应关系

#### 当前的开发模式（前端渲染）
> * 当前的开发模式就是我们的使用 SPA 的开发模式了
> * SPA 就是我们的 single page application
> * 单页面项目，这个就是通过的是我们的前端渲染
>   * 通过路由的切换，从而呈现出不同的组件呈现
>   * 前端通过切换 url 从而来实现页面渲染不同的页面了
>   * 这样之后就可以减少对我们服务器的压力减少
> * **前端路由的核心: 就是我们的页面进行实现切换的时候，页面不会进行整体刷新**
>   * 实现的方式含有两种: 第一种是 hash 模式 ，另一种模式就是 history
>     * 第一种实现的步骤就是改变页面的 url hash 值，从而达到页面的不刷新, #
>       * 就是实现的是我们的修改 **location.hash** 来实现的修改，从而实现页面的刷新
>       * 这个就是我们的 hash 模式了
>     * 第二种的实现的方案就是我们的使用 history 模式实现页面的不刷新
>       * history 模式原生具备的一些方法
>         * replaceState 替换原本的路径
>         * pushState 使用新的路径
>         * popState 路径的回退
>         * go 指定需要跳转的路径
>         * forward | back 向前向后进行修改我们的网页
>       * 这些方法都是属于我们的 BOM 的，window 中的方法

### vue-router
> * 在我们的不同的框架中实现使用的 router 就不同了
>   * angular 中使用的就是我们的 ngRouter
>   * React 中使用的就是我们的 ReactRouter
>   * Vue 中使用的就是我们的 vue-router
> * 这些路由就是实现的是将我们的 url 路径和组件之间实现一一映射起来
>   * 从而实现我们的页面的路径发送变化的时候，组件发生对应的变化切换
>   * `npm install vue-router` 生产依赖

#### 创建前端路由映射关系
> * 一般实现我们前端路由的开发，
>   * 首先需要的是在我们的 src 下面创建一个 router 文件夹
>   * 在这个里面来实现创建路由映射关系文件 index.js/ts | route.js/ts
> * 同时这里我们就可以区分一下我们的组件了
>   * 组件的分类
>   * 全局组件: 就是在 main.js/ts 中实现全局注册的组件
>   * 局部组件: 就是只有通过导入后才可以实现的组件
>   * 普通组件: 就是只是在某个路由中需要呈现的组件，但是并不参与路由的映射, components
>   * 路由组件: 就是我们的进行路由匹配的时候需要书写的主键，书写在 views 目录中的组件

```javascript
// 配置路由对应关系
import { createRouter, createWebHashHistory } from "vue-router"
// 开始导入我们的路由组件
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Category from "../views/Category.vue"

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home },
        {
            path: "/about",
            component: About },
        {
            path: "/category",
            component: Category
        }
    ]
})

export default router
```

```javascript
// 全局使用路由 main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

// 使用路由
app.use(router)

app.mount("#app")
```

```vue
<template>
  <div class="app">
    <div class="route">
      <router-link to="/" class="route-item" active-class="active">
        <button>首页 Home</button>
      </router-link>
      <router-link to="/About" class="route-item" active-class="active">
        <button>关于 About</button>
      </router-link>
      <router-link to="/Category" class="route-item" active-class="active">
        <button>分类 Category</button>
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup name="App">
</script>

<style scoped>
  .app {
    .route {
      width: 80%;
      margin: 0 auto;
      flex-direction: row;
      display: flex;
      justify-content: space-between;

      .route-item {
        text-decoration: none;
        button {
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }

        button:hover{
          background: deepskyblue;
          cursor: pointer;
        }
      }

      .active button {
        background: indianred;
      }
    }
    .content {
      width: 80%;
      margin: 0 auto;
      position: absolute;
      text-align: center;
      left: 0;
      right: 0;
      bottom: 0;
      top: 50px
    }
  }
</style>
```
> * 上面的就是创建的是我们最简单的路由实现了
> * 首先实现创建了我们的路由匹配关系文件，并且指定使用的是 hash 模式
> * 然后全局使用路由，通过 main.js 来实现使用路由
> * 最后就是在我们的根组件中使用我们的路由
>   * hash 模式的路径 是**具备我们的 # 的**
>   * history 模式是**不具备我们的 # 的**
>   * 还有用于 SSR 的时候使用的 **memory** 模式

#### router-link 中的属性
> * **to 属性**
>   * 指定的是我们的路由匹配的具体路径
> * **replace** 
>   * 用于指定我们的网页不记录上一次浏览过的网页(不常用)
> * **to 属性传递对象**
>   * `to='{path: "/Home"}'`
> * **active-class**
>   * 就是实现的是指定处于激活状态的路由所处的样式
>   * 这个样式是可以自定义别名或者使用内置的样式名的
>     * 内置的样式选择器名: **router-link-active**

### 路由懒加载
> * 在我们的一个页面的加载过程中，每个页面中的业务逻辑是很多的
> * 这个时候我们就需要实现使用我们的路由懒加载
>   * 路由懒加载就是进行我们的分包的处理
>   * 实现路由懒加载就是在我们进行路由配置文件的时候使用我们的
>     * import 函数实现导入，从而实现路由懒加载
>     * import 函数实现导入的时候实现的是我们的返回 Promise
>     * 同时在我们进行打包的时候，是可以实现分包处理的
>     * 这样就可以实现我们的首屏渲染速度了
```javascript
import { createRouter, createWebHashHistory } from "vue-router"

// 开始导入我们的路由组件
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Category = () => import("../views/Category.vue")

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        {
            path: '/Home',
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/category",
            component: Category,
            name: "category",
            meta: {
                
            }
        },
        {
            path: "/",
            redirect: "/Home",
        }
    ]
})

export default router
```

#### 路由其他属性设置
> * **name属性** 就是实现的是我们的设置一个识别符
> * **meta 自定义属性** object 来实现自定义属性

### 动态路由
> * 就是实现的是我们的动态路由的匹配
> * 因为我们的有些路由的跳转是会跟随着我们的一些动态参数的
> * 这个时候我们就可以使用 动态路由模式来实现了
> * 最基本的体现就是我们的在原本的匹配路径后面添加
>   * `/:id` 这个id 就是我们后面需要动态传递的参数了
>   * 这个时候我们的路由模式就是实现的是动态匹配了
> * 获取不同的用户 id 的方法
>   * 如果说是在对应的路由组件中进行获取的话
>     * 我们就可以使用 $route.params.动态匹配字段名
>   * 或者说使用 vue-router 提供的一个 hooks 函数来实现
>     * useRoute

```javascript
import { createRouter, createWebHashHistory } from "vue-router"

// 开始导入我们的路由组件
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Category = () => import("../views/Category.vue")
const User = () => import("../views/User.vue")

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/category",
            component: Category
        },
        {
            path: "/user/:username",
            component: User,
        },
        {
            path: "/",
            redirect: "/home",
        }
    ]
})

export default router
```

```vue
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
```

### NotFound 路由配置
> * 就是通过我们的正则的样式进行书写或者说使用我们的内置的写法即可
> * `path: "/:pathMatch(.*)*"`
```javascript
import { createRouter, createWebHashHistory } from "vue-router"

// 开始导入我们的路由组件
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Category = () => import("../views/Category.vue")
const User = () => import("../views/User.vue")

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/category",
            component: Category
        },
        {
            path: "/user/:username",
            component: User,
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/NotFound.vue"),
        },
        {
            path: "/",
            redirect: "/home",
        }
    ]
})

export default router
```

### 嵌套路由
> * 就是通过 children 来实现的配置
```javascript
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
]
```

### 编程式导航
> * 编程式导航就是通过的是我们的通过函数的形式实现我们的路由的跳转
> * 通过绑定元素的点击来实现页面的跳转，从而实现我们的编程式导航的实现
> * 通过我们的 useRouter 来获取我们的路由对象(注意上面获取动态路由的是 useRoute)
>   * 然后通过路由对象实现路由的跳转

```javascript
  import {useRouter} from "vue-router"
  const router = useRouter()

  const toHome = () => {
    router.push({
      path: "/home",
      query: {
        
      }
    })
  }
```

### 动态添加路由
> * 在我们以前的话，我们通过的是我们的在 router 中进行的添加的路由的配置
>   * 但是在我们的程序中运行中还会有很多的变动
>   * 这个时候，我们就可以使用我们的动态添加路由来实现我们的添加路由
>   * 这个就是常用于我们的后台管理系统中的
>     * 后台管理系统是为了实现的是开发人员可以实现我们的图形化界面的操作数据
>     * 但是这个时候我们就需要实现的是对不同的用户添加不同的功能
> * 开发中这种的解决方案具有两种
>   * 第一种是我们的根据不用的角色进行细致的区分
>     * 实现的是隐藏我们路由的显示
>     * 但是实际上的话对应的菜单还是有被注册的
>   * 第二种实现形式就是根据不同的角色进行不同的区分
>     * 这个时候我们的路由实现的是动态的添加来实现的

#### addRoute 实现添加路由（对应的反义方法是 removeRoute）
> * 在某种情况下我们就可以实现我们的动态的添加我们的路由
> * 通过我们的路由对象来实现添加的我们的路由
>   * 我们是可以实现的是我们的动态的添加一级路由或者二级路由
>     * hasRoute 判断路由是否存在
>     * getRoute 获取所有的路由信息

```javascript
import { createRouter, createWebHistory } from "vue-router"

// 开始导入我们的路由组件
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Category = () => import("../views/Category.vue")
const User = () => import("../views/User.vue")

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
            name: "home"
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/category",
            component: Category,
            children: []
        },
        {
            path: "/user/:username",
            component: User,
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/NotFound.vue"),
        },
        {
            path: "/",
            redirect: "/home",
        }
    ]
})

// 开始实现判断是否是我们的管理员
let isAdmin = false
if (isAdmin) {
    // 如果是我们的管理员，那就直接实现添加我们的路由
    router.addRoute({
        path: "/admin",
        component: () => import("../views/Admin.vue"),
    })
}

let isVip = true
if (isVip) {
    router.addRoute("home", {
        path: "vip",
        component: () => import("../views/Vip.vue"),
    })
}

console.log(router.getRoutes())
console.log(router.hasRoute("/admin"))

export default router
```

### 路由导航守卫
#### 前置导航守卫 router.beforeEach
> * 最常见的使用的场景就是在我们的进入某些页面的时候需要用户进行登录，否则就进入不了的操作
>   * 这个就是实现的是我们的进行在页面跳转的时候，进行我们的跳转拦截
> * 这个时候我们就可可以使用我们的路由导航守卫
>   * 用户登录成功直接进入首页或者说提前获取用户上次进入的页面，跳转该页面即可
> * 导航守卫含有我们的前置守卫，一个是我们的后置守卫
```javascript
// 业务需求
/*
* 这里需要注意的是，我们进行判断用户是否实现了登录，
* 我们需要进行的是在我们的 localStorage 中保存 token
* 情况一: 用户没有登录，就实现的是跳转到我们的登录页面
* 情况二: 用户已经登录，那么直接进入订单页面
* 
* token 的设置在我们的登录界面的时候就实现设置
* token 的取消就在我们的退出界面实现设置即可
* */
router.beforeEach((to, from) => {
    // 开始获取我们的 token ，用来实现判断我们是否处于登录状态
    const token = localStorage.getItem("token")
    if (!token && to.path === "/user") {
        return "/login"
    }
    if (!token && to.path === "/admin") {
        return "/login"
    }
    if (!token && to.path === "/category") {
        return "/login"
    }
    if (!token && to.path === "/about") {
        return "/login"
    }
})
```
#### 路由导航的整体流程
* 首先实现的是我们的**导航被激活**
* 然后在我们**失活的组件中调用 beforeRouteLeave 守卫**
* 执行**全局配置的前置导航守卫 beforeEach**
* 在被**激活的组件中调用 beforeRouteUpdate 守卫**
* 然后进行 beforeEnter 守卫
* 解析**异步路由组件（就是我们的懒加载的组件，通过 import 函数导入的组件）**
* 在被**激活的组件中使用 beforeRouteEnter 守卫**
* 调用全局的 beforeResolve 守卫
* 导航被确定
* 调用全局 后置导航守卫 **afterEach**
* 触发 DOM 更新
* 调用 beforeRouteEnter 守卫给 next 函数执行