import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import {
    selectedCharacterSelector,
    TopicsLayout
} from '../../map';

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const _TopicsLayoutContainer = ({ character }) => <TopicsLayout character={character} />;

/**
 * Extract the following data from the store
 * @param {Object} state - Redux store state.
 * @return {Object} - The state attributes to add to props.
 */
const mapStateToProps = state => ({
    character: selectedCharacterSelector(state)
});

const TopicsLayoutContainer = connect(mapStateToProps)(_TopicsLayoutContainer);

export { TopicsLayoutContainer };
