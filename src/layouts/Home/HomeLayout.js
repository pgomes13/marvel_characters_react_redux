import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';

import {
    Header,
    Footer,
    HomePanel,
    Album
} from '../../map';
import PropTypes from "prop-types";

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const HomeLayout = ({ characters }) => (
    <Fragment>
        <CssBaseline/>
        <Header/>
        <main>
            <HomePanel/>
            { characters.length === 0 && <LinearProgress /> }
            { characters && <Album characters={characters} /> }
        </main>
        <Footer/>
    </Fragment>
);

HomeLayout.propTypes = {
    characters: PropTypes.array.isRequired
};

export { HomeLayout };
