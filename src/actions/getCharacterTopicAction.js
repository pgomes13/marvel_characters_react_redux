import { GET_CHARACTER_TOPIC_REQUEST } from '../map';

export const getCharacterTopicAction = (payload) => ({
    type: GET_CHARACTER_TOPIC_REQUEST,
    payload
});