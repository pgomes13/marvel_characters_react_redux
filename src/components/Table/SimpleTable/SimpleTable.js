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
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";

/**
 * The SimpleTable component consisting of the material-ui Table Component
 * @param {String} title - the title prop
 * @param {String} pathname - the pathname prop
 * @param {Array} items - the items array prop
 * @param {Array} labels - the labels array prop
 * @param {Array} identifiers - the identifiers array prop
 * @param {Function} setAction - the setAction function
 * @param {Function} dispatch - the dispatch function prop
 * @returns {Node} - the SimpleCard component
 */
const _SimpleTable = ({ classes, labels, items, identifiers, pathname, setAction, dispatch }) => {
    const setClickAction = (url) => {
        return dispatch(
            setAction({
                topic: null,
                id: null,
                subTopic: null,
                url: url
            })
        );
    };

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
                    { items.map(((item, key) => (
                        <TableRow key={key}>
                            {identifiers.map((identifier, key) => (
                                identifier === 'resourceURI' ?
                                    <TableCell component="th" scope="row" key={key}>
                                        <Link to={pathname} key={key} onClick={() => setClickAction(item[identifier])}>
                                            <Button size="small" color="primary" key={key}>View</Button>
                                        </Link>
                                    </TableCell>
                                :
                                    <TableCell component="th" scope="row" key={key}>{item[identifier]}</TableCell>
                            ))}
                        </TableRow>
                    )))}
                </TableBody>
            </Table>
        </Paper>
    );
};

_SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    labels: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    pathname: PropTypes.string.isRequired,
    identifiers: PropTypes.array.isRequired,
    isValueUrl: PropTypes.bool,
    setAction: PropTypes.func,
    dispatch: PropTypes.func
};

const SimpleTable = withStyles(SimpleTableStyles)(_SimpleTable);

export { _SimpleTable, SimpleTable };
