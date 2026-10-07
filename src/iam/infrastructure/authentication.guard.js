import useIamStore from "@/iam/application/iam.store.js";

export const authenticationGuard = (to, from) => {
    const store = useIamStore();
    const { isSignedIn } = store;
    const isAnonymous = !isSignedIn;
    const publicRoutes = [
        '/iam/sign-in',
        '/iam/sign-up',
        '/about',
        '/page-not-found'
    ];
    const routeRequiresToBeAuthenticated = !publicRoutes.includes(to.path);
    if (isAnonymous && routeRequiresToBeAuthenticated) {
        return { name: 'iam-sign-in' };
    } else {
        return true;
    }
}