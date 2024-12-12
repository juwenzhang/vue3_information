import {reactive, toRefs} from "vue"
export default function useDataReactive() {
    // 开始实现定义数据
    const message = "juwenzhang"  // 这个只是我们的普通的数据罢了
    const account = reactive({
        name: "account",
        age: 18
    })
    let {name, age} = toRefs(account)
    // 开始定义方法来实现修改数据
    const changeName = () => {
        name.value = name.value === "juwenzhang" ? "account" : "juwenzhang"
    }
    const changeAge = () => {
        age.value = age.value === 19 ? 18 : 19
    }
    return {
        message,
        name,
        age,
        changeName,
        changeAge
    }
}