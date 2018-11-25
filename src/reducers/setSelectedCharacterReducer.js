import { fromJS } from 'immutable';
import { SET_SELECTED_CHARACTER } from "../map";

const setSelectedCharacterReducer = (initialState = {}) => {
    return (state = initialState, action) => {
        switch (action.type) {
            case SET_SELECTED_CHARACTER:
                return state.set('character', fromJS(action.character));

            default:
                return state;
        }
    };
};

export { setSelectedCharacterReducer };
