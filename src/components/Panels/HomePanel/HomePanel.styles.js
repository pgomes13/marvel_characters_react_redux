const HomePanelStyles = theme => ({
    homePanelUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    homePanelContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    }
});

export { HomePanelStyles };