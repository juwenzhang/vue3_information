import {onMounted, onUnmounted} from "vue"
export default function useSetupLifeCycle() {
    // 开始书写我们的生命周期函数
    fetch("https://p3-passport.byteacctimg.com/img/user-avatar" +
        "/15ed8e62676016ac1e89cac3ba7196e3~90x90.awebp").then((response) => {
            console.log(response)
    }).catch((error) => {
        console.log("网络请求出错", error)
    })
    onMounted(() => {
        console.log("组件已经成功被挂载~~~")
    })

    onUnmounted(() => {
        console.log("组件已经被销毁~~~")
    })
}