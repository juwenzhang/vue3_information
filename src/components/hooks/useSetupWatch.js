import { reactive, ref, watch } from "vue";

export default function useSetupWatch() {
    // 定义响应式数据
    const message = ref("hello vue and hello react")
    const info = reactive({
        name: "juwenzhang",
        age: 18
    })

    // 开始实现监听数据的变化
    watch(message, (newValue,
                    oldValue) => {
        console.log(newValue, oldValue)
    }, { immediate: true, deep: true })
    watch(info, (newValue,
                 oldValue) => {
        console.log(newValue, oldValue)
    }, { immediate: true, deep: true })

    watch(() => info.name, (newValue,
                 oldValue) => {
        console.log(newValue, oldValue)
    }, { immediate: true, deep: true })

    // 开始定义修改数据的函数
    const changeMessage = (value) => {
        message.value = value
    }
    const changeInfo = (value) => {
        info.name = value
    }

    return {
        message,
        info,
        changeMessage,
        changeInfo
    }
}