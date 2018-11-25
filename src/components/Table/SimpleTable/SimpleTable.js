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
const _SimpleTable = ({ classes, keyLabel, valueLabel, items, keyIdentifier, valueIdentifier, isValueUrl = false }) => {
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>{keyLabel}</TableCell>
                        <TableCell>{valueLabel}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { items.map(item => (
                        <TableRow>
                            <TableCell component="th" scope="row">{item[keyIdentifier]}</TableCell>
                            { !isValueUrl && <TableCell>{item[valueIdentifier]}</TableCell> }
                            { isValueUrl && <TableCell><a href={item[valueIdentifier]} target="_blank" rel="noopener noreferrer">{item[valueIdentifier]}</a></TableCell> }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

_SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    keyLabel: PropTypes.string.isRequired,
    valueLabel: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    keyIdentifier: PropTypes.string.isRequired,
    valueIdentifier: PropTypes.string.isRequired
};

const SimpleTable = withStyles(SimpleTableStyles)(_SimpleTable);

export { SimpleTable };
