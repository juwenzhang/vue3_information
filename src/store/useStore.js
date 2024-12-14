import {createStore} from "vuex"

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
        increment: (state) => {
            state.counter++
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
    }
})

export default store