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
import Typography from "@material-ui/core/Typography/Typography";

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const HomeLayout = ({ characters }) => (
    <Fragment>
        <CssBaseline/>
        <Header title="Marvel Comics" />
        <main>
            <HomePanel
                title="Welcome to Marvel Comics!"
                description='This app is a tribute to the legendary Stan Lee. React is a powerful framework and "With great power comes great responsibilty".'
            />
            { characters.length === 0 && <LinearProgress /> }
            { characters && <Album characters={characters} /> }
        </main>
        <Footer
            title="Marvel Comics"
            html='<a href="http://marvel.com" target="_blank" rel="noopener noreferrer">Data provided by Marvel. © 2018 MARVEL</a>'
        />
    </Fragment>
);

HomeLayout.propTypes = {
    characters: PropTypes.array.isRequired
};

export { HomeLayout };
