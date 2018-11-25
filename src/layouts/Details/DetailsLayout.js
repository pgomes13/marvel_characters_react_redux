import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';

import {
    Header,
    Footer,
    CharacterDetails
} from '../../map';
import PropTypes from "prop-types";

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const DetailsLayout = ({ character }) => {
    const isCharacterObjectEmpty = Object.keys(character).length === 0 && character.constructor === Object;

    return (
        <Fragment>
            <CssBaseline/>
            <Header/>
            <main>
                { isCharacterObjectEmpty && <LinearProgress /> }
                { !isCharacterObjectEmpty && <CharacterDetails character={character} /> }
            </main>
            <Footer/>
        </Fragment>
    );
};

DetailsLayout.propTypes = {
    character: PropTypes.object.isRequired
};

export { DetailsLayout };
