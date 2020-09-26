import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import withLayout from "../../components/layout";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuList from "../../components/menu-list"
import Sidebar from "../../components/sidebar"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(6)
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container spacing={3}>
            <Grid item md={3} xs={12}>
                <Paper className={classes.paper}>
                    <Sidebar />
                </Paper>
            </Grid>
            <Grid item md={9} xs={12}>
            <Paper className={classes.paper}>
                <MenuList />
            </Paper>
            </Grid>
        </Grid>
    )
};

export default withLayout(Home);