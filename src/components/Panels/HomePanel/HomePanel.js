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
const _HomePanel = ({ classes }) => (
    <div className={classes.homePanelUnit}>
        <div className={classes.homePanelContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Album layout
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>
        </div>
    </div>
);

_HomePanel.propTypes = {
    classes: PropTypes.object.isRequired
};

const HomePanel = withStyles(HomePanelStyles)(_HomePanel);

export { HomePanel };
