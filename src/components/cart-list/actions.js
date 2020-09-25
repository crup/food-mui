import Types from "./types";

const addToCart = (index) => ({
    type: Types.ADD_TO_CART,
    index
});

const removeFromCart = (index) => ({
    type: Types.REMOVE_FROM_CART,
    index
});

export default {
    addToCart,
    removeFromCart
}