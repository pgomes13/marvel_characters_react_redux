import { SET_SELECTED_CHARACTER } from '../map';

/**
 * Set the selected character action payload to the store
 * @param payload - the payload that is set along with the action
 * @returns {Object} - the action object
 */
export const setSelectedCharacterAction = (character) => ({
    type: SET_SELECTED_CHARACTER,
    character
});