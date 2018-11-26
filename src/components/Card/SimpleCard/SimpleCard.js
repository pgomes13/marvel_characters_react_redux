import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";

import { SimpleCardStyles } from './SimpleCard.styles';

/**
 * The SimpleCard component consisting of material-ui Card component
 * @param {Object} classes - the material-ui classes prop
 * @param {String} imageUrl - the image url prop
 * @param {String} title - the title prop
 * @param {String} pathname - the pathname prop
 * @param {String} description - the description prop
 * @param {Function} setAction - the setAction function
 * @param {Function} dispatch - the dispatch function prop
 * @returns {Node} - the SimpleCard component
 */
const _SimpleCard = ({ classes, title, imageUrl, pathname, setAction, dispatch, character }) => {

    /**
     * Set the action passed from the parent component
     */
    const setClickAction = () => {
        dispatch(
            setAction(character)
        );
    };

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={pathname} onClick={setClickAction}>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

_SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    setAction: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
};

const SimpleCard = withStyles(SimpleCardStyles)(_SimpleCard);

export { SimpleCard };
