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

router.beforeEach((to, from) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} - ${to.meta.title}`;

    return true;
});

export default router;