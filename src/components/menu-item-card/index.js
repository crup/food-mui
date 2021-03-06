import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { pink } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 320,
        marginRight: 20,
        display: "inline-block"
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    large: {
        height: 100,
        width: 100
    },
    pink: {
        color: theme.palette.getContrastText(pink[300]),
        backgroundColor: pink[300],
        height: 100,
        width: 100
    },
    badge: {
        minWidth: "100%"
    }
}));

export default function MenuItemCard({
    name,
    thumbnail,
    price,
    description,
    onClick,
    buttonText = "Add",
    quantity
}) {
    const classes = useStyles();
    return (
        <Box className={classes.root} mb={3}>
            <Badge className={classes.badge} badgeContent={quantity} color="secondary">
                <Card className={classes.badge}>
                    <CardHeader
                        title={name}
                        subheader={`₹ ${price / 100}`}
                        avatar={
                            thumbnail ? <Avatar aria-label={name} alt={name} src={thumbnail} className={classes.large}></Avatar> :
                                <Avatar aria-label={name} alt={name} className={classes.pink}><FastfoodIcon /></Avatar>
                        }
                    />
                    {description && <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>}
                    <CardActions disableSpacing>
                        <Button
                            onClick={onClick}
                            variant="outlined"
                            color="default"
                            className={classes.button}
                            endIcon={<ShoppingCartIcon />}
                        >
                            {buttonText}
                        </Button>
                    </CardActions>
                </Card>
          </Badge>
        </Box>
    );
}
