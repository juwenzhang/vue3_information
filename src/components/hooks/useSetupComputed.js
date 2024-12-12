import {computed, reactive, toRefs} from "vue";

export default function useSetupComputed() {
    // 定义数据
    const name = reactive({
        firstName: "76433",
        lastName: "水逆信封",
    })
    // 开始使用 toRefs 实现解构
    const { firstName, lastName } = toRefs(name)
    // 开始实现书写我们的计算属性
    const fullName = computed({
        set: (newValue) => {
            [name.firstName, name.lastName] = newValue.split("-")
        },
        get: () => {
            return name.firstName + "-" + name.lastName
        }
    })

    const changeFullName = (newValue) => {
        fullName.value = newValue
    }
    return {
        firstName,
        lastName,
        fullName,
        changeFullName
    }
}