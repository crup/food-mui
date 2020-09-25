import React, { useEffect } from 'react'
import MenuItemCard from "../menu-item-card"

const MenuList = ({
    fetchMenu,
    fetchCategories,
    menuItems,
    addToCart
}) => {
    const parsedData = menuItems;
    useEffect(() => {
        fetchMenu();
        fetchCategories();
    }, [fetchCategories, fetchMenu])

    const onClick = (index) => {
        addToCart(index);
    }

    return (
        <React.Fragment>
            {parsedData.map((item, index) => <MenuItemCard 
                key={index} 
                name={item.name} 
                thumbnail={item.thumbnail} 
                price={item.price} 
                description={item.description} 
                onClick={() => onClick(index)}
                />)}
        </React.Fragment>
    )
}

export default MenuList;