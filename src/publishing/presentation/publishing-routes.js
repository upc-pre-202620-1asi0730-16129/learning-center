
// Lazy-loaded components for publishing routes
const categoryList = () => import('./views/category-list.vue');
const categoryForm = () => import('@/publishing/presentation/views/category-form.vue');
const tutorialList = () => import('@/publishing/presentation/views/tutorial-list.vue');
const tutorialForm = () => import('@/publishing/presentation/views/tutorial-form.vue');


const publishingRoutes = [
    {
        path: 'categories',
        name: 'publishing-categories',
        component: categoryList,
        meta: { title: 'Categories' }
    },
    {
        path: 'categories/new',
        name: 'publishing-category-new',
        component: categoryForm,
        meta: { title: 'New Category' }
    },
    {
        path: 'categories/:id/edit',
        name: 'publishing-category-edit',
        component: categoryForm,
        meta: { title: 'Edit Category' }
    },
    {
        path: 'tutorials',
        name: 'publishing-tutorials',
        component: tutorialList,
        meta: { title: 'Tutorials' }
    },
    {
        path: 'tutorials/new',
        name: 'publishing-tutorial-new',
        component: tutorialForm,
        meta: { title: 'New Tutorial' }
    },
    {
        path: 'tutorials/:id/edit',
        name: 'publishing-tutorial-edit',
        component: tutorialForm,
        meta: { title: 'Edit Tutorial' }
    }
];

export default publishingRoutes;