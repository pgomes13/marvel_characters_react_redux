import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { SimpleCard, setSelectedCharacterAction } from '../../map';
import { AlbumStyles } from './Album.styles';

const _Album = ({ classes, characters, dispatch }) => {

    const imageUrl = thumbnail => thumbnail.path + '.' + thumbnail.extension;
    const pathname = name => `/characters/${name.toLowerCase().replace(' ', '-')}/details`;

    return (
        <Fragment>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                    {characters.map((character, key) => (
                        <Grid item key={key} sm={6} md={4} lg={3}>
                            <SimpleCard
                                title={character.name}
                                imageUrl={imageUrl(character.thumbnail)}
                                pathname={pathname(character.name)}
                                setAction={setSelectedCharacterAction}
                                dispatch={dispatch}
                                character={character}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Fragment>
    );
};

_Album.propTypes = {
    classes: PropTypes.object.isRequired,
    characters: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const Album = connect()(withStyles(AlbumStyles)(_Album));

export { Album };
