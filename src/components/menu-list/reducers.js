import { createReducer } from "reduxsauce";
import menuParser from "../../parsers/menu-parser";
import Types from "./types";

export const INITIAL_STATE = {
    menuItems: {},
    isMenuLoading: false,
    categories: [],
    isCategoriesLoading: false,
    activeCategory: null
};

export const fetchMenu = (state = INITIAL_STATE) => {
    return { ...state, isMenuLoading: true };
};

export const fetchMenuSuccess = (state = INITIAL_STATE, { menuItems }) => {
    return { ...state, isMenuLoading: false, menuItems: menuParser(menuItems) };
};

export const fetchMenuError = (state = INITIAL_STATE, { error }) => {
    return { ...state, isMenuLoading: false, menuItems: {}, error };
};

export const fetchCategories = (state = INITIAL_STATE) => {
    return { ...state, isCategoriesLoading: true };
};

export const fetchCategoriesSuccess = (state = INITIAL_STATE, { categories }) => {
    return { ...state, isCategoriesLoading: false, categories };
};

export const fetchCategoriesError = (state = INITIAL_STATE, { error }) => {
    return { ...state, isCategoriesLoading: false, categories: [], error };
};

export const setActiveCategory = (state = INITIAL_STATE, { activeCategory }) => {
    return { ...state, activeCategory };
};

export const HANDLERS = {
    [Types.FETCH_MENU]: fetchMenu,
    [Types.FETCH_MENU_SUCCESS]: fetchMenuSuccess,
    [Types.FETCH_MENU_FAILURE]: fetchMenuError,
    [Types.FETCH_CATEGORIES]: fetchCategories,
    [Types.FETCH_CATEGORIES_SUCCESS]: fetchCategoriesSuccess,
    [Types.FETCH_CATEGORIES_FAILURE]: fetchCategoriesError,
    [Types.SET_ACTIVE_CATEGORY]: setActiveCategory,
};

export default createReducer(INITIAL_STATE, HANDLERS);
