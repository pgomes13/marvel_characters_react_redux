import React from 'react';
import PropTypes from 'prop-types';

import { Album } from './Album';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const AlbumContainer = () => (
    <Album cards={cards} />
);

AlbumContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export { AlbumContainer };
