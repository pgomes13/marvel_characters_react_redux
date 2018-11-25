import { List } from 'immutable';

/**
 * Get the characters array through the store
 * @param {Immutable.Map} state - The application state
 * @returns {Array} - the characters array
 */
export const charactersSelector = state => {
    return (state.getIn(['data', 'characters', 'payload']) || List()).toJS();
};