import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { mainListItems } from './ListItems';
import { ChartData } from './ChartData';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: "100%",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingRight: theme.spacing(4),


    },
    paper: {

        padding: theme.spacing(2),
        display: 'flex',
        width: "90%",
        height: "90%",
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: "80vh",
        //width: "75vw"
    },
    main: {
        background_color: "#eb24f2",
    }

}));

export default function Dashboard() {
    const classes = useStyles();
    //const [open, setOpen] = React.useState(true);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper),
                }}
            >
                <div className={classes.toolbarIcon}>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}  >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <div><ChartData /></div>

                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}