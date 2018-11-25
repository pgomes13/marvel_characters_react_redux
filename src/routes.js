import { HomeLayout } from './layouts';

const Routes = [
    {
        path: "/",
        component: HomeLayout
    },
    {
        redirect: true,
        path: "/",
        to: "/HomeLayout"
    }
];

export { Routes };

