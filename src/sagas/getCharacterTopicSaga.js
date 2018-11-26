import { put, call } from 'redux-saga/effects';

import {
    getMarvelAPIData,
    GET_CHARACTER_TOPIC_REQUEST_SUCCESS,
    GET_CHARACTER_TOPIC_REQUEST_ERROR
} from '../map';

/**
 * Responsible for making the api calls to the marvel comics endpoint,
 * and instructing the redux-saga middle ware on the next line of action,
 * for success or failure operation.
 * @param payload
 */
export function* getCharacterTopicSaga({ payload }) {
    try {
        const characterTopic = yield call(getMarvelAPIData, payload);

        yield [
            put({ type: GET_CHARACTER_TOPIC_REQUEST_SUCCESS, characterTopic })
        ];
    } catch (error) {
        yield put({ type: GET_CHARACTER_TOPIC_REQUEST_ERROR, error });
    }
}