import { createTypes } from "reduxsauce";

export default createTypes(
    `
    FETCH_MENU
    FETCH_MENU_SUCCESS
    FETCH_MENU_FAILURE

    FETCH_CATEGORIES
    FETCH_CATEGORIES_SUCCESS
    FETCH_CATEGORIES_FAILURE
`,
    {
        prefix: "menulist/"
    }
);
