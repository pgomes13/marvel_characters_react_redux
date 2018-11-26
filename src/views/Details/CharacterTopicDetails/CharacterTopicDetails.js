import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";

import {
    SimpleTable
} from '../../../map';
import { CharacterTopicDetailsStyles } from './CharacterTopicDetails.styles';

/**
 * Get the CharacterTopicDetails higher order component(HOC) view consisting of related components
 * @param {Object} classes - the material-ui classes prop
 * @param {Array} topics - the topics Array
 * @returns {Node} - the CharacterTopicDetails component
 * @private
 */
const _CharacterTopicDetails = ({ classes, topics }) => {
    const { urls, prices, creators, characters, stories, description } = topics;

    return (
        <Fragment>
            <CssBaseline/>
            <div className={classes.layout}>
                <main>
                    <Grid container spacing={40} className={classes.cardGrid}>
                        <main className={classes.content}>
                            {description &&
                            <Typography variant="h4" gutterBottom component="h2">
                                {description}
                            </Typography>
                            }
                            {urls && urls.length !== 0 &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    URLs
                                </Typography>
                                <SimpleTable
                                    items={urls}
                                    labels={['Type', 'Url']}
                                    identifiers={['type', 'url']}
                                />
                            </div>
                            }
                            {prices && prices.length !== 0 &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Prices
                                </Typography>
                                <SimpleTable
                                    items={prices}
                                    labels={['Type', 'Price']}
                                    identifiers={['type', 'price']}
                                />
                            </div>
                            }
                            {creators && creators.items && creators.items.length !== 0 &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Creators
                                </Typography>
                                <SimpleTable
                                    items={creators.items}
                                    labels={['Name', 'Role']}
                                    identifiers={['name', 'role']}
                                />
                            </div>
                            }
                            {characters && characters.items && characters.items.length !== 0 &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Characters
                                </Typography>
                                <SimpleTable
                                    items={characters.items}
                                    labels={['Name', '']}
                                    identifiers={['name', '']}
                                />
                            </div>
                            }
                            {stories && stories.items && stories.items.length !== 0 &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Stories
                                </Typography>
                                <SimpleTable
                                    items={stories.items}
                                    labels={['Name', 'type']}
                                    identifiers={['name', 'type']}
                                />
                            </div>
                            }
                        </main>
                    </Grid>
                </main>
            </div>
        </Fragment>
    );
};

_CharacterTopicDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    topics: PropTypes.object.isRequired
};

const CharacterTopicDetails = withStyles(CharacterTopicDetailsStyles)(_CharacterTopicDetails);

export { CharacterTopicDetails };
