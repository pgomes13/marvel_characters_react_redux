import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { getCharacterTopicSaga } from '../getCharacterTopicSaga';
import {
    getMarvelAPIData,
    GET_CHARACTER_TOPIC_REQUEST_SUCCESS,
    GET_CHARACTER_TOPIC_REQUEST_ERROR
} from '../../map';

describe('getCharacterTopicSaga()', () => {
    const payload = {
        topic: 'characters',
        id: 3,
        subTopic: 'names'
    };
    const characterTopic = 'testing';
    const generator = cloneableGenerator(getCharacterTopicSaga)({ payload });

    it('get data by successfully calling the marvel comic endpoint', () => {
        const gen = generator.clone();
        expect(gen.next().value).toEqual(call(getMarvelAPIData, payload));
        expect(gen.next(characterTopic).value).toEqual([
            put({ type: GET_CHARACTER_TOPIC_REQUEST_SUCCESS, characterTopic })
        ]);
        expect(gen.next().done).toBeTruthy();
    });

    it('error while calling the marvel comic endpoint', () => {
        const error = 'error testing';
        const gen = generator.clone();
        expect(gen.next().value).toEqual(call(getMarvelAPIData, payload));
        expect(gen.throw(error).value).toEqual(put({ type: GET_CHARACTER_TOPIC_REQUEST_ERROR, error }));
        expect(gen.next().done).toBeTruthy();
    });
});