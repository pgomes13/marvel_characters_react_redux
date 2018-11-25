import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';

import { FooterStyles } from './FooterStyles';

/**
 * The Footer component consisting of the footer info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
const _Footer = ({ classes }) => (
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
    </footer>
);

_Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

const Footer = withStyles(FooterStyles)(_Footer);

export { Footer };
