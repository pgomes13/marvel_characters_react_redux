import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { CharacterCard } from '../../map';

import { AlbumStyles } from './Album.styles';

const _Album = ({ classes, cards }) => (
    <Fragment>
        <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container spacing={40}>
                {cards.map(card => (
                    <Grid item key={card} sm={6} md={4} lg={3}>
                        <CharacterCard/>
                    </Grid>
                ))}
            </Grid>
        </div>
    </Fragment>
);

_Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

const Album = withStyles(AlbumStyles)(_Album);

export { Album };
