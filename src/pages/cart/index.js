import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import withLayout from "../../components/layout";
import Grid from '@material-ui/core/Grid';
import CartList from "../../components/cart-list";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heading: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid className={classes.heading} item>
                <Typography variant="h4" component="h2">
                    Cart
                </Typography>
            </Grid>
            <Grid item>
                <CartList />
            </Grid>
        </Container>
    )
};

export default withLayout(Home);