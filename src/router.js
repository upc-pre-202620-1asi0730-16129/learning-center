import {createRouter, createWebHistory} from "vue-router";
import Home from "@/shared/presentation/views/home.vue";
import About from "@/shared/presentation/views/about.vue";

const routes =
    [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { title: 'Home' }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { title: 'About' }
        },
    ];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;