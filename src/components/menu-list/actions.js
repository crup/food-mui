import { MenuService } from "../../services";
import Types from "./types";

const fetchMenuInit = () => ({
    type: Types.FETCH_MENU
});

const fetchMenuSuccess = (menuItems) => ({
    type: Types.FETCH_MENU_SUCCESS,
    menuItems
});

const fetchMenuFailure = (error) => ({ type: Types.FETCH_MENU_FAILURE, error });

const fetchMenu = () => dispatch => {
    dispatch(fetchMenuInit());
    return new Promise((resolve, reject) => {
        MenuService.fetchMenu()
            .then(response => {
                dispatch(fetchMenuSuccess(response.data));
                resolve(response.data);
            }).catch(error => {
                dispatch(fetchMenuFailure(error));
                reject(error);
            });
    });
};

const fetchCategoriesInit = () => ({
    type: Types.FETCH_CATEGORIES
});

const fetchCategoriesSuccess = (categories) => ({
    type: Types.FETCH_CATEGORIES_SUCCESS,
    categories
});

const fetchCategoriesFailure = (error) => ({ type: Types.FETCH_CATEGORIES_FAILURE, error });

const fetchCategories = () => dispatch => {
    dispatch(fetchCategoriesInit());
    return new Promise((resolve, reject) => {
        MenuService.fetchCategories()
            .then(response => {
                dispatch(fetchCategoriesSuccess(response.data));
                resolve(response.data);
            }).catch(error => {
                dispatch(fetchCategoriesFailure(error));
                reject(error);
            });
    });
};

const setActiveCategory = (activeCategory) => ({
    type: Types.SET_ACTIVE_CATEGORY,
    activeCategory
});

export default {
    fetchMenu,
    fetchCategories,
    setActiveCategory
}