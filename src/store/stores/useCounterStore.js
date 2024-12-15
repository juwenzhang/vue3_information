// 开始定义我们的管理 counter 的 store
import { defineStore } from "pinia"

// 第一个参数使用状态管理的 id
// 第二个参数就是我们的对象
// 返回值是一个函数
const useUserInfoStore =  defineStore("userInfoStore", {
    state: () => ({
        count: 0,
        name: "juwenzhang",
        age: 18
    }),

    getters: {
        getCount: (state) => {
            return state.count++
        }
    },

    actions: {
        incrementAction: (payload) => {
            this.count += 1
        },
    }
})


// 在外部直接调用该函数，直接获取得到我们的响应式数据
// 然后获取得到我们所有的状态管理数据，通过结构出来的数据没有响应式
// 这个时候需要就需要使用我们的 toRefs 或者 StoreToRefs

// $reset 实现的就是重置我们的状态管理信息
// $patch 实现一次性修改多个状态信息
// $state 实现的是替换我们进行管理的对象
// 上面的三种方法都是使用下面的函数进行调用后实现的
// useUserInfoStore().$reset()
export default useUserInfoStore