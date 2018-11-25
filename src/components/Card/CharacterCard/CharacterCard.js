import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";

import { CharacterCardStyles } from './CharacterCard.styles';
import { setSelectedCharacterAction } from '../../../map';

/**
 * The HomePanel component consisting of the home panel headings and info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
class _CharacterCard extends Component {

    /**
     * Set the selected character to the store
     */
    setSelectCharacter = () => {
        this.props.dispatch(
            setSelectedCharacterAction(this.props.character)
        );
    };

    render() {
        const { character, classes } = this.props;
        const { path, extension } = character.thumbnail;
        const imageUrl = path + '.' + extension;

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imageUrl}
                    title="Image title"
                />
                <CardActions>
                    <Button size="small" color="primary" onClick={this.setSelectCharacter}>
                        View
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

_CharacterCard.propTypes = {
    classes: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired
};

const CharacterCard = connect()(withStyles(CharacterCardStyles)(_CharacterCard));

export { CharacterCard };
