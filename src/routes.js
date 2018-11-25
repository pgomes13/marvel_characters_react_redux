import { HomeLayoutContainer } from './layouts';

const Routes = [
    {
        path: "/",
        component: HomeLayoutContainer
    },
    {
        redirect: true,
        path: "/",
        to: "/"
    }
];

export { Routes };

