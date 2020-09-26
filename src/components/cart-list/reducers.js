import { createReducer } from "reduxsauce";
import Types from "./types";

export const INITIAL_STATE = {
    cart: {},
    totalItems: 0
};

export const addToCart = (state = INITIAL_STATE, { category, index }) => {
    return { ...state, cart: {
            ...state.cart, 
            [category]: {
                ...state.cart[category],
                [index]: (state.cart[category] && state.cart[category][index] ? state.cart[category][index] : 0) + 1,
            },
        },
        totalItems: state.totalItems + 1
    };
};

export const removeFromCart = (state = INITIAL_STATE, { category, index }) => {
    const categoryData = { ...state.cart[category] };
    if(categoryData[index]) {
        categoryData[index] = categoryData[index] - 1;
    }
    if(categoryData[index] === 0) {
        delete categoryData[index];
    }
    return { ...state, isMenuLoading: false, cart: {
        ...state.cart,
        [category]: categoryData
    },
    totalItems: state.totalItems - 1 };
};

export const HANDLERS = {
    [Types.ADD_TO_CART]: addToCart,
    [Types.REMOVE_FROM_CART]: removeFromCart
};

export default createReducer(INITIAL_STATE, HANDLERS);
