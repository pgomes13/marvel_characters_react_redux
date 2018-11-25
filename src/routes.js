import { HomeLayoutContainer, DetailsLayoutContainer } from './layouts';

const Routes = [
    {
        path: "/characters",
        component: HomeLayoutContainer
    },
    {
        path: "/characters/:character_name/details",
        component: DetailsLayoutContainer
    },
    {
        redirect: true,
        path: "/",
        to: "/characters"
    }
];

export { Routes };

