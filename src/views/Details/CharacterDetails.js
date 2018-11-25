import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { DetailedCard } from '../../map';
import { CharacterDetailsStyles } from './CharacterDetails.styles';

const _CharacterDetails = ({classes}) => (
    <Fragment>
        <CssBaseline/>
        <div className={classes.layout}>
            <main>
                <Grid container spacing={40} className={classes.cardGrid}>
                    <Grid item xs={12} md={12}>
                        <DetailedCard/>
                    </Grid>
                </Grid>
            </main>
        </div>
    </Fragment>
);

_CharacterDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};

const CharacterDetails = withStyles(CharacterDetailsStyles)(_CharacterDetails);

export { CharacterDetails };
