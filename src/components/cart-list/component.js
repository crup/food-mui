import React from 'react'
import { Fragment } from 'react';
import MenuItemCard from "../menu-item-card"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';

const CartList = ({
    cart,
    menuItems,
    removeFromCart,
    totalItems,
    history
}) => {
    const onClick = (category, index) => {
        removeFromCart(category, index);
    }

    const onClickShowMenu = () => { history.push("/") }

    return (
        <React.Fragment>
            { totalItems > 0 && Object.keys(cart).map((category) => {
                return Object.keys(cart[category]).map((menuItemIndex) => {
                    return <Fragment key={`${category}-${menuItemIndex}`}>
                        <MenuItemCard
                            name={menuItems[category][menuItemIndex].name}
                            thumbnail={menuItems[category][menuItemIndex].thumbnail}
                            price={menuItems[category][menuItemIndex].price}
                            description={menuItems[category][menuItemIndex].description}
                            buttonText={"Remove"}
                            onClick={() => onClick(category, menuItemIndex)}
                            quantity={cart[category][menuItemIndex]}
                        />
                    </Fragment>
                })        
            })}
            { totalItems === 0 && <div>
                    <Typography variant="h6" component="h2">
                        Your cart is empty.
                    </Typography>
                    <Button onClick={onClickShowMenu} variant="contained" color="secondary">Show Menu</Button>
                </div> }
        </React.Fragment>
    )
}

export default withRouter(CartList);