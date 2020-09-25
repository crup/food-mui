import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import withLayout from "../../components/layout";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuList from "../../components/menu-list"
import Sidebar from "../../components/sidebar"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Sidebar />
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <MenuList />
            </Grid>
        </Grid>
    )
};

export default withLayout(Home);