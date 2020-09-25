import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import MenuItemCard from "../menu-item-card"

const MenuList = ({
    fetchMenu,
    fetchCategories,
    menuItems
}) => {
    const parsedData = menuItems;
    useEffect(() => {
        fetchMenu();
        fetchCategories();
    }, [fetchCategories, fetchMenu])

    return (
        <Grid item xs={9}>
                {parsedData.map((item, index) => <MenuItemCard 
                key={index} 
                name={item.name} 
                thumbnail={item.thumbnail} 
                price={item.price} 
                description={item.description} 
                />)}
            </Grid>
    )
}

export default MenuList;