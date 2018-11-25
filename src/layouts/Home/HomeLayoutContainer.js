import React, { Component } from 'react';

import {
   HomeLayout,
    getCharactersAction,
    charactersSelector
} from '../../map';
import connect from "react-redux/es/connect/connect";

/**
 * Get the album view with the grid character cards
 * @param props
 * @returns {*}
 * @private
 */
class _HomeLayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.getCharactersData();
    }

    getCharactersData = () => {
        this.props.dispatch(
            getCharactersAction({
                topic: 'characters',
                id: null,
                subTopic: null
            })
        );
    };

    render = () => <HomeLayout characters={this.props.characters} />;
};

/**
 * Extract the following data from the store
 * @param {Object} state - Redux store state.
 * @return {Object} - The state attributes to add to props.
 */
const mapStateToProps = state => ({
    characters: charactersSelector(state)
});

const HomeLayoutContainer = connect(mapStateToProps)(_HomeLayoutContainer);

export { HomeLayoutContainer };
