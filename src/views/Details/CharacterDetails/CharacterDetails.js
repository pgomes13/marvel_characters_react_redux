import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography/Typography";

import {
    DetailedCard,
    SimpleTable,
    getCharacterTopicAction
} from '../../../map';
import { CharacterDetailsStyles } from './CharacterDetails.styles';

/**
 * Get the CharacterDetails higher order component(HOC) view consisting of related components
 * @param {Object} classes - the material-ui classes prop
 * @param {Object} character - the character object
 * @param {Function} dispatch - the dispatch function prop
 * @returns {Node} - the CharacterDetails component
 * @private
 */
const _CharacterDetails = ({ classes, character, dispatch }) => {

    const { name, description, thumbnail, comics, series, stories, events, urls } = character;
    const imageUrl = thumbnail.path + '.' + thumbnail.extension;
    const pathname = name => `/characters/${name.toLowerCase().replace(' ', '-')}/topics`;

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
                            {comics.items.length > 0 &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Comics
                                </Typography>
                                <SimpleTable
                                    items={comics.items}
                                    labels={['Name', '']}
                                    identifiers={['name', 'resourceURI']}
                                    setAction={getCharacterTopicAction}
                                    dispatch={dispatch}
                                    pathname={pathname(character.name)}
                                />
                            </div>
                            }
                            {series.items.length > 0  &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Series
                                </Typography>
                                <SimpleTable
                                    items={series.items}
                                    labels={['Name', '']}
                                    identifiers={['name', 'resourceURI']}
                                    setAction={getCharacterTopicAction}
                                    dispatch={dispatch}
                                    pathname={pathname(character.name)}
                                />
                            </div>
                            }
                            {stories.items.length > 0  &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Stories
                                </Typography>
                                <SimpleTable
                                    items={stories.items}
                                    labels={['Name', '']}
                                    identifiers={['name', 'resourceURI']}
                                    setAction={getCharacterTopicAction}
                                    dispatch={dispatch}
                                    pathname={pathname(character.name)}
                                />
                            </div>
                            }
                            {events.items.length > 0  &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Events
                                </Typography>
                                <SimpleTable
                                    items={events.items}
                                    labels={['Name', '']}
                                    identifiers={['name', 'resourceURI']}
                                    setAction={getCharacterTopicAction}
                                    dispatch={dispatch}
                                    pathname={pathname(character.name)}
                                />
                            </div>
                            }
                            {urls.length > 0  &&
                            <div className={classes.tableContainer}>
                                <Typography variant="h4" gutterBottom component="h2">
                                    Urls
                                </Typography>
                                <SimpleTable
                                    items={urls}
                                    labels={['Name', '']}
                                    identifiers={['type', 'url']}
                                    setAction={getCharacterTopicAction}
                                    dispatch={dispatch}
                                    pathname={pathname(character.name)}
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

_CharacterDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

const CharacterDetails = connect()(withStyles(CharacterDetailsStyles)(_CharacterDetails));

export { CharacterDetails };
