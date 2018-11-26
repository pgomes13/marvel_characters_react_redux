import { HomeLayoutContainer, DetailsLayoutContainer, TopicsLayoutContainer } from './layouts';

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
        path: "/characters/:character_name/topics",
        component: TopicsLayoutContainer
    },
    {
        redirect: true,
        path: "/",
        to: "/characters"
    }
];

export { Routes };

