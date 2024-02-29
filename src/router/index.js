import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing-page",
            component: () => import("../views/MainView.vue")
        }
    ]
})
export default router