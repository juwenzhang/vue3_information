import {createStore} from "vuex"
import { CHANGE_NAME } from "./mutationType.js"
import home from "./modules/home.js"

// 开始定义我们的 store
const store = createStore({
    // 定于i我们的状态
    state: () => (
        {
            counter: 1,
            name: "juwenzhang",
            age: 18
        }
    ),

    mutations: {
        // 第一个参数接收我们的状态管理数据 state
        // 第二个参数接收的是我们的需要接收的参数
        increment: (state) => {
            state.counter++
        },

        decrement: (state) => {
            state.counter--
        },

        [CHANGE_NAME]: (state, payload) => {
            state.name = payload
        }
    },

    getters: {
        doubleCounter: (state) => {
            return state.counter * 2
        },

        // 第一个参数是我们的 state ，第二个参数是我们的 getters
        message: (state, getters) => {
            // 这里还可以返回一个函数的
            // 函数内部再来进行返回我们的新的函数
            // 这个就是函数式编程了
            return `${getters.doubleCounter} and ${state.name} and ${state.age}`
        }
    },

    actions: {
        // 第一个参数从表现形式上表现出来的和我们的 state 相似
        // 但是它实现获取的是我们的执行上下文，在第一个参数中拥有和 state 相同的方法
        incrementAction: (context) => {
            context.commit("increment")
            console.log(context.state)
            console.log(context.getters)
        },
        changeNameAction: (context, payload) => {
            context.commit(CHANGE_NAME, payload)
        },
        fetchDataAction: async (context) => {
            fetch("https://jsonplaceholder.typicode.com/users").then(res => {
                res.json().then(data => {
                    console.log(data)
                })
            })

            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            console.log(data)

            context.commit(CHANGE_NAME, data)
        }
    },

    modules: {
        home: home
    }
})

export default store