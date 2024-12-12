import { createRouter, createWebHashHistory } from "vue-router"

// 开始导入我们的路由组件
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Category = () => import("../views/Category.vue")
const User = () => import("../views/User.vue")

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    mode: "history",
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/category",
            component: Category
        },
        {
            path: "/user/:username",
            component: User,
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/NotFound.vue"),
        },
        {
            path: "/",
            redirect: "/home",
        }
    ]
})

export default router