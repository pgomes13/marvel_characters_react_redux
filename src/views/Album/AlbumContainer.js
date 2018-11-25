import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Album } from './Album';
import { getCharactersAction } from '../../map';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class _AlbumContainer extends Component {
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

    render() {
        return (
            <Album cards={cards} />
        );
    }
};

_AlbumContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

/**
 * Extract the following data from the store
 * @param {Object} state - Redux store state.
 * @return {Object} - The state attributes to add to props.
 */
const mapStateToProps = state => ({

});

const AlbumContainer = connect(mapStateToProps)(_AlbumContainer);

export { AlbumContainer };
