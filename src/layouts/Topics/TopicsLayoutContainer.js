import React from 'react';
import connect from "react-redux/es/connect/connect";

import {
    characterTopicsSelector,
    TopicsLayout
} from '../../map';

/**
 * Get the TopicsLayoutContainer component
 * @param {Array} topics - the topics array prop
 * @returns {Node} - the TopicsLayout component along with store data
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
