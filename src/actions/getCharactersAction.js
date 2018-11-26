import { GET_CHARACTERS_REQUEST } from '../map';

/**
 * Get the characters action object
 * @param payload - the payload that is set along with the action
 * @returns {Object} - the action object
 */
export const getCharactersAction = (payload) => ({
    type: GET_CHARACTERS_REQUEST,
    payload
});