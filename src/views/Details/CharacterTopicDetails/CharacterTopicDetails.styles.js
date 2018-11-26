const CharacterTopicDetailsStyles = theme => ({
    layout: {
        width: 'auto',
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    tableContainer: {
        marginTop: theme.spacing.unit * 3
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100%',
        overflow: 'auto',
    }
});

export { CharacterTopicDetailsStyles };