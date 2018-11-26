import { takeLatest } from 'redux-saga/effects';

import { getCharactersSaga } from './getCharactersSaga';
import { getCharacterTopicSaga } from './getCharacterTopicSaga';
import { GET_CHARACTERS_REQUEST, GET_CHARACTER_TOPIC_REQUEST } from '../map';

export default function* watch() {
    yield takeLatest(GET_CHARACTERS_REQUEST, getCharactersSaga);
    yield takeLatest(GET_CHARACTER_TOPIC_REQUEST, getCharacterTopicSaga);
}
