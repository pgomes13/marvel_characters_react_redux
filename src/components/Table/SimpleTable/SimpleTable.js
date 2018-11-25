import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SimpleTableStyles } from './SimpleTable.styles';

/**
 * The HomePanel component consisting of the home panel headings and info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
const _SimpleTable = ({ classes, labels, items, identifiers }) => {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {labels.map((label, key) => (
                            <TableCell key={key}>{label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { items.map(item => (
                        <TableRow>
                            {identifiers.map((identifier, key) => (
                                <TableCell component="th" scope="row" key={key}>{item[identifier]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

_SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    labels: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    identifiers: PropTypes.array.isRequired,
    isValueUrl: PropTypes.bool
};

const SimpleTable = withStyles(SimpleTableStyles)(_SimpleTable);

export { SimpleTable };
