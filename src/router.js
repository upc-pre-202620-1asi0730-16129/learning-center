import {createRouter, createWebHistory} from "vue-router";
import Home from "@/shared/presentation/views/home.vue";
import publishingRoutes from "@/publishing/presentation/publishing-routes.js";
import iamRoutes from "@/iam/presentation/iam-routes.js";

const about = () => import('./shared/presentation/views/about.vue');
const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

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
            component: about,
            meta: { title: 'About' }
        },
        //Nested routes for publishing
        {
            path: '/publishing',
            name: 'publishing',
            children: publishingRoutes
        },
        /*
        Uncomment this section if you want to enable IAM routes
        {
            path: '/iam',
            name: 'iam',
            children: iamRoutes
        },*/
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/:pageMatch(.*)*',
            name: 'not-found',
            component: pageNotFound,
            meta: { title: 'Page Not Found' }
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