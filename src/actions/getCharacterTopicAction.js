import { GET_CHARACTER_TOPIC_REQUEST } from '../map';

/**
 * Get the character topic action object
 * @param payload - the payload that is set along with the action
 * @returns {Object} - the action object
 */
export const getCharacterTopicAction = (payload) => ({
    type: GET_CHARACTER_TOPIC_REQUEST,
    payload
});