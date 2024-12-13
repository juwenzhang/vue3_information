import { createRouter, createWebHistory } from "vue-router"
import Login from "../views/Login.vue";

// 开始导入我们的路由组件
const Home = () => import("../views/Home.vue")
const About = () => import("../views/About.vue")
const Category = () => import("../views/Category.vue")
const User = () => import("../views/User.vue")

// 开始实现创建路由
const router = createRouter({
    // 创建映射关系
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
            name: "home"
        },
        {
            path: '/login',
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/category",
            component: Category,
            children: []
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

// 开始实现判断是否是我们的管理员
// 后面通过状态管理工具进行管理，pinia | Vuex ==> in directory named store
let isAdmin = false
if (isAdmin) {
    // 如果是我们的管理员，那就直接实现添加我们的路由
    router.addRoute({
        path: "/admin",
        component: () => import("../views/Admin.vue"),
    })
}

let isVip = true
if (isVip) {
    router.addRoute("home", {
        path: "vip",
        component: () => import("../views/Vip.vue"),
    })
}
console.log(router.getRoutes())
console.log(router.hasRoute("/admin"))


// 业务需求
/*
* 这里需要注意的是，我们进行判断用户是否实现了登录，我们需要进行的是在我们的 localStorage 中保存 token
* 情况一: 用户没有登录，就实现的是跳转到我们的登录页面
* 情况二: 用户已经登录，那么直接进入订单页面
* */
router.beforeEach((to, from) => {
    // 开始获取我们的 token ，用来实现判断我们是否处于登录状态
    const token = localStorage.getItem("token")
    if (!token && to.path === "/user") {
        return "/login"
    }
    if (!token && to.path === "/admin") {
        return "/login"
    }
    if (!token && to.path === "/category") {
        return "/login"
    }
    if (!token && to.path === "/about") {
        return "/login"
    }
})


export default router