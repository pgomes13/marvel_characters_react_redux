import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';

import { HeaderStyles } from './Header.styles';

/**
 * The Header component consisting of the header info
 * @param {Object} classes - the material-ui classes prop
 * @param {String} title - the title prop
 * @returns {Node} - the Header component
 */
const _Header = ({ classes, title }) => (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
);

_Header.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string
};

const Header = withStyles(HeaderStyles)(_Header);

export { Header };
