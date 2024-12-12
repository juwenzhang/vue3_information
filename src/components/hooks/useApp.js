import {reactive, ref} from "vue";

export default function useApp() {
    let info = reactive({
        name: "DataShowReactive",
        age: 18
    })
    const isShow = ref(true)
    const changeInfo = (value) => {
        info.name = info?.name === "DataShowReactive" ? value : "DataShowReactive"
    }

    const changeStatus = () => {
        isShow.value = !isShow.value
    }
    return {
        info,
        isShow,
        changeInfo,
        changeStatus,
    }
}