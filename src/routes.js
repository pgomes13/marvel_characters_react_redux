import { Album } from './map';

const Routes = [
    {
        path: "/album",
        component: Album
    },
    {
        redirect: true,
        path: "/",
        to: "/album"
    }
];

export { Routes };

