import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/useStore.js'
import pinia from "./store/index01.js"

const app = createApp(App)

// 使用路由
app.use(router)

// 全局使用我们的状态工具
app.use(store)
app.use(pinia)

app.mount("#app")