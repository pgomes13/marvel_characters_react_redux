import { GET_CHARACTERS_REQUEST } from '../map';

export const getCharactersAction = (payload) => ({
    type: GET_CHARACTERS_REQUEST,
    payload
});