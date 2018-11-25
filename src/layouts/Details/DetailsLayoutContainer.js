import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import {
    selectedCharacterSelector,
    DetailsLayout
} from '../../map';

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const _DetailsLayoutContainer = ({ character }) => <DetailsLayout character={character} />;

/**
 * Extract the following data from the store
 * @param {Object} state - Redux store state.
 * @return {Object} - The state attributes to add to props.
 */
const mapStateToProps = state => ({
    character: selectedCharacterSelector(state)
});

const DetailsLayoutContainer = connect(mapStateToProps)(_DetailsLayoutContainer);

export { DetailsLayoutContainer };
