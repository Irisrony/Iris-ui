import { createWebHashHistory,createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import("../views/TestPage.vue")
    },
    {
        path: '/wordsrain',
        component: () => import("../views/WordsRain.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router