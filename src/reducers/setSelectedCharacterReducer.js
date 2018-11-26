import { fromJS } from 'immutable';
import { SET_SELECTED_CHARACTER, GET_CHARACTER_TOPIC_REQUEST_SUCCESS } from "../map";

const setSelectedCharacterReducer = (initialState = {}) => {
    return (state = initialState, action) => {
        switch (action.type) {
            case SET_SELECTED_CHARACTER:
                return state.set('character', fromJS(action.character));

            case GET_CHARACTER_TOPIC_REQUEST_SUCCESS:
                return state.set('topic', fromJS(action.characterTopic));

            default:
                return state;
        }
    };
};

export { setSelectedCharacterReducer };
