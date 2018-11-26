import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";

import {
    DetailedCard,
    SimpleTable
} from '../../../map';
import { CharacterTopicDetailsStyles } from './CharacterTopicDetails.styles';

const _CharacterTopicDetails = ({ classes, character }) => {

    return (
        <Fragment>
            <CssBaseline/>
            <div className={classes.layout}>
                <main>
                    <Grid container spacing={40} className={classes.cardGrid}>
                        <main className={classes.content}>
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Comics
                                </Typography>
                                <SimpleTable
                                    items={[]}
                                    labels={['Name', 'Url']}
                                    identifiers={['name', 'resourceURI']}
                                />
                            </div>
                        </main>
                    </Grid>
                </main>
            </div>
        </Fragment>
    );
};

_CharacterTopicDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired
};

const CharacterTopicDetails = withStyles(CharacterTopicDetailsStyles)(_CharacterTopicDetails);

export { CharacterTopicDetails };
