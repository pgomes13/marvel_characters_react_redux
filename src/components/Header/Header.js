import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';

import { HeaderStyles } from './HeaderStyles';

/**
 * The Header component consisting of the page header and icons
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Header component
 */
const _Header = ({ classes }) => (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
                Album layout
            </Typography>
        </Toolbar>
    </AppBar>
);

_Header.propTypes = {
    classes: PropTypes.object.isRequired
};

const Header = withStyles(HeaderStyles)(_Header);

export { Header };