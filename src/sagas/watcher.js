import { takeLatest } from 'redux-saga/effects';

import { getCharactersSaga } from './getCharactersSaga';
import { GET_CHARACTERS_REQUEST } from '../map';

export default function* watch() {
    yield takeLatest(GET_CHARACTERS_REQUEST, getCharactersSaga);
}
