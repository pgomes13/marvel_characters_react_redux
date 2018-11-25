import { HomeLayoutContainer } from './layouts';
import { CharacterDetails } from './views';

const Routes = [
    {
        path: "/characters",
        component: HomeLayoutContainer
    },
    {
        path: "/characters/:character_name/details",
        component: CharacterDetails
    },
    {
        redirect: true,
        path: "/",
        to: "/characters"
    }
];

export { Routes };

