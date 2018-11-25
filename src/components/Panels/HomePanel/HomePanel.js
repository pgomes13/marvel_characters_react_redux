import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles } from '@material-ui/core/styles';

import { HomePanelStyles } from './HomePanel.styles';

/**
 * The HomePanel component consisting of the home panel headings and info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
const _HomePanel = ({ classes, title, description }) => (
    <div className={classes.homePanelUnit}>
        <div className={classes.homePanelContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {description}
            </Typography>
        </div>
    </div>
);

_HomePanel.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
};

const HomePanel = withStyles(HomePanelStyles)(_HomePanel);

export { HomePanel };
