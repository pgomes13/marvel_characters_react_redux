import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import { getCharactersReducer } from './getCharactersReducer';
import { setSelectedCharacterReducer } from './setSelectedCharacterReducer';

export default combineReducers({
    data: combineReducers({
        results: getCharactersReducer(Map({})),
        selected: setSelectedCharacterReducer(Map({}))
    })
});