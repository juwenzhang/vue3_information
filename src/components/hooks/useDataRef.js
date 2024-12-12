import {isProxy, isReactive, ref, toRefs} from "vue"

export const useDataRef = (props, context) => {
    const message = ref("hello world")  // 开始定义我们的简单的响应式数据
    const complexData = ref({
        name: "juwenzhang",
        age: 18
    })
    const changeMessage = () => {
        message.value = message.value === "hello world" ? "hello vue" : "hello world"
    }

    const info = props?.info
    const { name, age } = toRefs(info)  // 实现解构
    const changeInfo = (value) => {
        if (isProxy(info) && isReactive(props)) {
            context.emit("changeInfo", value)
        }
    }
    // 开始实现我们的返回数据
    return {
        message,
        complexData,
        name,
        age,
        changeMessage,
        changeInfo
    }
}