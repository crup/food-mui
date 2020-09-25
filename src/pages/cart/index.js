import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import withLayout from "../../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Container } from "@material-ui/core";

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
        <Container maxWidth="lg">
            <Grid item>
            <Typography variant="h4" component="h2">
  Cart
</Typography>
            </Grid>
        </Container>
    )
};

export default withLayout(Home);