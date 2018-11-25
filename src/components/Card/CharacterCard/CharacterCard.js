import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";

import { CharacterCardStyles } from './CharacterCard.styles';

/**
 * The HomePanel component consisting of the home panel headings and info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
const _CharacterCard = ({ classes, character }) => {
    const { path, extension, name } = character.thumbnail;
    const getImageUrl = () => path + '.' + extension;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={getImageUrl()} // eslint-disable-line max-len
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography>
                    This is a media card. You can use this section to describe the content.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
            </CardActions>
        </Card>
    );
};

_CharacterCard.propTypes = {
    classes: PropTypes.object.isRequired
};

const CharacterCard = withStyles(CharacterCardStyles)(_CharacterCard);

export { CharacterCard };
