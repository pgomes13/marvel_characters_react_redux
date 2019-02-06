import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { getCharactersSaga } from '../getCharactersSaga';
import {
    getMarvelAPIData,
    GET_CHARACTERS_REQUEST_SUCCESS,
    GET_CHARACTERS_REQUEST_ERROR
} from '../../map';

describe('getCharactersSaga()', () => {
    const payload = {
        topic: 'characters',
        id: 3,
        subTopic: 'names'
    };
    const characters = [
        {
            name: 'test1',
            description: 'testing the testing out of it'
        },
        {
            name: 'test2',
            description: 'testing the testing out of it'
        }
    ];
    const generator = cloneableGenerator(getCharactersSaga)({ payload });

    it('get data by successfully calling the marvel comic endpoint', () => {
        const gen = generator.clone();
        expect(gen.next().value).toEqual(call(getMarvelAPIData, payload));
        expect(gen.next(characters).value).toEqual([
            put({ type: GET_CHARACTERS_REQUEST_SUCCESS, characters })
        ]);
        expect(gen.next().done).toBeTruthy();
    });

    it('error while calling the marvel comic endpoint', () => {
        const error = 'error testing';
        const gen = generator.clone();
        expect(gen.next().value).toEqual(call(getMarvelAPIData, payload));
        expect(gen.throw(error).value).toEqual(put({ type: GET_CHARACTERS_REQUEST_ERROR, error }));
        expect(gen.next().done).toBeTruthy();
    });
});