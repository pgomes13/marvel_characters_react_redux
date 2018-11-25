import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { SimpleCard } from '../../map';

import { AlbumStyles } from './Album.styles';

const _Album = ({ classes, characters }) => (
    <Fragment>
        <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
                {characters.map((character, key) => (
                    <Grid item key={key} sm={6} md={4} lg={3}>
                        <SimpleCard character={character} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </Fragment>
);

_Album.propTypes = {
    classes: PropTypes.object.isRequired,
    characters: PropTypes.array.isRequired
};

const Album = withStyles(AlbumStyles)(_Album);

export { Album };
