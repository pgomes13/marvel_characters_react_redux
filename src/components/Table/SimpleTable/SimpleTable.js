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
 * The HomePanel component consisting of the home panel headings and info
 * @param {Object} classes - the material-ui classes prop
 * @returns {Node} - the Footer component
 */
const _SimpleTable = ({ classes, labels, items, identifiers, pathname, setAction, dispatch }) => {

    const state = {
        url: ''
    };

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

export { SimpleTable };
