import { Album } from './views';

const Routes = [
    {
        path: "/characters",
        component: Album
    },
    {
        redirect: true,
        path: "/",
        to: "/characters"
    }
];

export { Routes };

