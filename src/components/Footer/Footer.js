import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';

import { FooterStyles } from './Footer.styles';

/**
 * The Footer component consisting of the footer info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
const _Footer = ({ classes, title, content, html }) => (
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            {title}
        </Typography>
        {content &&
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {content}
        </Typography>
        }
        {html &&
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
        }

    </footer>
);

_Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    content: PropTypes.string
};

const Footer = withStyles(FooterStyles)(_Footer);

export { Footer };
