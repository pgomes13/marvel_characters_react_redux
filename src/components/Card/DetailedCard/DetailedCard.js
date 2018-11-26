import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";

import { DetailedCardStyles } from './DetailedCard.styles';
import Hidden from "@material-ui/core/Hidden/Hidden";

/**
 * The DetailedCard component consisting of material-ui Card component
 * @param {Object} classes - the material-ui classes prop
 * @param {String} imageUrl - the image url prop
 * @param {String} title - the title prop
 * @param {String} description - the description prop
 * @returns {Node} - the DetailedCard component
 */
const _DetailedCard = ({ classes, imageUrl, title, description }) => (
    <Card className={classes.card}>
        <div className={classes.cardDetails}>
            <CardContent>
                <Typography component="h2" variant="h5">
                    { title }
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    { description }
                </Typography>
            </CardContent>
        </div>
        <Hidden xsDown>
            <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
                title="Image title"
            />
        </Hidden>
    </Card>
);

_DetailedCard.propTypes = {
    classes: PropTypes.object.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

const DetailedCard = withStyles(DetailedCardStyles)(_DetailedCard);

export { _DetailedCard, DetailedCard };
