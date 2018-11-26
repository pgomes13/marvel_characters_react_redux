import { fromJS } from 'immutable';
import { GET_CHARACTERS_REQUEST_SUCCESS } from '../map';

/**
 * Get the characters reducers
 * @param initialState - the initial state for this reducer
 * @returns {Function} - the mutated state
 */
const getCharactersReducer = (initialState = {}) => {
    return (state = initialState, action) => {
        switch (action.type) {
            case GET_CHARACTERS_REQUEST_SUCCESS:
                return state.set('characters', fromJS(action.characters));

            default:
                return state;
        }
    };
};

export { getCharactersReducer };
