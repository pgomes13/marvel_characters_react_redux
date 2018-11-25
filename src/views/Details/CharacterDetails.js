import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";

import {
    DetailedCard,
    SimpleTable
} from '../../map';
import { CharacterDetailsStyles } from './CharacterDetails.styles';

const _CharacterDetails = ({ classes, character }) => {

    const { name, description, thumbnail, comics } = character;
    const imageUrl = thumbnail.path + '.' + thumbnail.extension;

    return (
        <Fragment>
            <CssBaseline/>
            <div className={classes.layout}>
                <main>
                    <Grid container spacing={40} className={classes.cardGrid}>
                        <Grid item xs={12} md={12}>
                            <DetailedCard
                                imageUrl={imageUrl}
                                title={name}
                                description={description}
                            />
                        </Grid>
                        <main className={classes.content}>
                            <Typography variant="h4" gutterBottom component="h2">
                                Comics
                            </Typography>

                            <SimpleTable
                                keyLabel="Name"
                                valueLabel="URL"
                                items={comics.items}
                            />
                        </main>
                    </Grid>
                </main>
            </div>
        </Fragment>
    );
};

_CharacterDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired
};

const CharacterDetails = withStyles(CharacterDetailsStyles)(_CharacterDetails);

export { CharacterDetails };
