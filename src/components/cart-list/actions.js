import Types from "./types";

const addToCart = (category, index) => ({
    type: Types.ADD_TO_CART,
    category,
    index
});

const removeFromCart = (category, index) => ({
    type: Types.REMOVE_FROM_CART,
    category,
    index
});

export default {
    addToCart,
    removeFromCart
}