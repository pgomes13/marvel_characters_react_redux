import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import {
    characterTopicsSelector,
    TopicsLayout
} from '../../map';

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
const _TopicsLayoutContainer = ({ topics }) => <TopicsLayout topics={topics} />;

/**
 * Extract the following data from the store
 * @param {Object} state - Redux store state.
 * @return {Object} - The state attributes to add to props.
 */
const mapStateToProps = state => ({
    topics: characterTopicsSelector(state)
});

const TopicsLayoutContainer = connect(mapStateToProps)(_TopicsLayoutContainer);

export { TopicsLayoutContainer };
