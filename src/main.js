import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/useStore.js'
import pinia from "./store/index01.js"
import axios from "axios"

const app = createApp(App)

// 使用路由
app.use(router)

// 全局使用我们的状态工具
app.use(store)
app.use(pinia)

app.mount("#app")


axios.request({
    url: "hhttps://jsonplaceholder.typicode.com/users",
    method: "get",
    timeout: 1000
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})


axios.get("https://jsonplaceholder.typicode.com/users", {
    timeout: 1000,
    params: {
        username: localStorage.getItem("userName"),
        password: localStorage.getItem("password")
    },
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})