import { put, call } from 'redux-saga/effects';

import {
    getMarvelAPIData,
    GET_CHARACTERS_REQUEST_SUCCESS,
    GET_CHARACTERS_REQUEST_ERROR
} from '../map';

/**
 * Responsible for making the api calls to the marvel comics endpoint,
 * and instructing the redux-saga middle ware on the next line of action,
 * for success or failure operation.
 * @param payload
 */
export function* getCharactersSaga({ payload }) {
    try {
        const response = yield call(getMarvelAPIData, payload);
        const characters = response.data.data.results;
        console.log(characters);

        yield [
            put({ type: GET_CHARACTERS_REQUEST_SUCCESS, characters })
        ];
    } catch (error) {
        yield put({ type: GET_CHARACTERS_REQUEST_ERROR, error });
    }
}