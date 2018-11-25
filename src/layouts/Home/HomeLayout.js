import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    Header,
    Footer,
    HomePanel,
    Album
} from '../../map';

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const HomeLayout = () => (
    <Fragment>
        <CssBaseline/>
        <Header/>
        <main>
            <HomePanel/>
            <Album />
        </main>
        <Footer/>
    </Fragment>
);

export { HomeLayout };
