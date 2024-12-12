import { ref } from "vue"

export default function useCounter() {
    let counter = ref(0)
    const increment = () => {
        counter.value++
    }
    const decrement = () => {
        counter.value--
    }

    // 实现提供给外部使用的变量
    return {
        increment,
        decrement,
        counter
    }
}