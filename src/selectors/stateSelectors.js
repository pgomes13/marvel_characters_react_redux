import { List, Map } from 'immutable';

/**
 * Get the characters array through the store
 * @param {Immutable.Map} state - The application state
 * @returns {Array} - the characters array
 */
export const charactersSelector = state => {
    return (state.getIn(['data', 'results', 'characters']) || List()).toJS();
};

/**
 * Get the character object through the store
 * @param {Immutable.Map} state - The application state
 * @returns {Array} - the character object
 */
export const selectedCharacterSelector = state => {
    return (state.getIn(['data', 'selected', 'character']) || Map()).toJS();
};

/**
 * Get the topic object through the store
 * @param {Immutable.Map} state - The application state
 * @returns {Array} - the topic object
 */
export const characterTopicsSelector = state => {
    return (state.getIn(['data', 'selected', 'topic']) || Map()).toJS();
};