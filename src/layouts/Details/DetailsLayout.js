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
            <Header title="Marvel Comics" />
            <main>
                { isCharacterObjectEmpty && <LinearProgress /> }
                { !isCharacterObjectEmpty && <CharacterDetails character={character} /> }
            </main>
            <Footer
                title="Marvel Comics"
                html='<a href="http://marvel.com" target="_blank" rel="noopener noreferrer">Data provided by Marvel. © 2018 MARVEL</a>'
            />
        </Fragment>
    );
};

DetailsLayout.propTypes = {
    character: PropTypes.object.isRequired
};

export { DetailsLayout };
