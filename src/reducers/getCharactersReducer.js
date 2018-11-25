import { fromJS } from 'immutable';
import { GET_CHARACTERS_REQUEST_SUCCESS } from '../map';

const getCharactersReducer = (initialState = {}) => {
    return (state = initialState, action) => {
        switch (action.type) {
            case GET_CHARACTERS_REQUEST_SUCCESS:
                return state.set('payload', fromJS(action.characters));

            default:
                return state;
        }
    };
};

export { getCharactersReducer };
