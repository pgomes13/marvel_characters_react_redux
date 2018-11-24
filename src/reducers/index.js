import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import { getCharactersReducer } from './getCharactersReducer';

export default combineReducers({
    data: combineReducers({
        characters: getCharactersReducer(Map({}))
    })
});