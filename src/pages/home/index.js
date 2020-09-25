import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import withLayout from "../../components/layout";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItemCard from "../../components/menu-item-card"
import Sidebar from "../../components/sidebar"
import data from "./data";

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
    const parsedData = data;
    
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Sidebar />
                </Paper>
            </Grid>
            <Grid item xs={9}>
                {parsedData.map((item, index) => <MenuItemCard 
                key={index} 
                name={item.name} 
                thumbnail={item.thumbnail} 
                price={item.price} 
                description={item.description} 
                />)}
            </Grid>
        </Grid>
    )
};

export default withLayout(Home);