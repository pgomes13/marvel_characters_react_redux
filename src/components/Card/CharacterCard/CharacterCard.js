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
    constructor(props) {
        super(props);
        const { character, classes } = this.props;
        const { path, extension } = character.thumbnail;
        this.imageUrl = path + '.' + extension;
    }


    /**
     * Set the selected character to the store
     */
    setSelectCharacter = () => {
        this.props.dispatch(
            setSelectedCharacterAction(this.character)
        );
    };

    getCharacterDetailsUrl = () => (

    );

    render() {

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={this.imageUrl}
                    title="Image title"
                />
                <CardActions>
                    <Link to={this.getCharacterDetailsUrl} onClick={this.setSelectCharacter}>
                        <Button size="small" color="primary">
                            View
                        </Button>
                    </Link>
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
