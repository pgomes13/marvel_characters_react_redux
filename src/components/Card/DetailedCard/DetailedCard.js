import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";

import { DetailedCardStyles } from './DetailedCard.styles';
import Hidden from "@material-ui/core/Hidden/Hidden";

/**
 * The HomePanel component consisting of the home panel headings and info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
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
    classes: PropTypes.object.isRequired
};

const DetailedCard = withStyles(DetailedCardStyles)(_DetailedCard);

export { DetailedCard };