import React, { useEffect } from 'react'
import { Fragment } from 'react';
import MenuItemCard from "../menu-item-card"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    categoryHeading: {
        padding: theme.spacing(2)
    },
}));

const MenuList = ({
    fetchMenu,
    fetchCategories,
    menuItems,
    addToCart,
    categories
}) => {
    const classes = useStyles();

    useEffect(() => {
        fetchCategories().then(fetchMenu);
    }, [fetchCategories, fetchMenu])

    const onClick = (index) => {
        addToCart(index);
    }

    return (
        <React.Fragment>
            {categories
                .filter(category => !!menuItems[category.slug])
                .map((category, index) => {
                    return <Fragment key={index}>
                        <Typography className={classes.categoryHeading} variant="h4" component="h2">
                            { category.name }
                        </Typography>
                        {menuItems[category.slug].map((menuItem, menuIndex) => <MenuItemCard
                            key={`${index}-${menuIndex}`}
                            name={menuItem.name}
                            thumbnail={menuItem.thumbnail}
                            price={menuItem.price}
                            description={menuItem.description}
                            onClick={() => onClick(menuIndex)}
                        />)}
                    </Fragment>
                })}
        </React.Fragment>
    )
}

export default MenuList;