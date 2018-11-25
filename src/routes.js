import { HomeLayoutContainer } from './layouts';
import { Blog } from './views';

const Routes = [
    {
        path: "/characters",
        component: HomeLayoutContainer
    },
    {
        path: "/characters/:character_name/details",
        component: Blog
    },
    {
        redirect: true,
        path: "/",
        to: "/characters"
    }
];

export { Routes };

