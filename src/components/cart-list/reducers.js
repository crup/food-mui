import { createReducer } from "reduxsauce";
import Types from "./types";

export const INITIAL_STATE = {
    cart: {},
    totalItems: 0
};

export const addToCart = (state = INITIAL_STATE, { index }) => {
    return { ...state, cart: {
            ...state.cart, 
            [index]: (state.cart[index] ? state.cart[index] : 0) + 1,
        },
        totalItems: state.totalItems + 1
    };
};

export const removeFromCart = (state = INITIAL_STATE, { index }) => {
    return { ...state, isMenuLoading: false, cart: [
        ...state.cart.slice(0, index),
        ...state.cart.slice(index),
    ],
    totalItems: state.totalItems - 1 };
};

export const HANDLERS = {
    [Types.ADD_TO_CART]: addToCart,
    [Types.REMOVE_FROM_CART]: removeFromCart
};

export default createReducer(INITIAL_STATE, HANDLERS);
