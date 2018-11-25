import { SET_SELECTED_CHARACTER } from '../map';


export const setSelectedCharacterAction = (character) => ({
    type: SET_SELECTED_CHARACTER,
    character
});