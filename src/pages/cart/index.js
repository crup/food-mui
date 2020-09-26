import React from "react";
import withLayout from "../../components/layout";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Container } from "@material-ui/core";

const Home = () => {
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