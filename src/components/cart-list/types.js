import { createTypes } from "reduxsauce";

export default createTypes(
    `
    ADD_TO_CART
    REMOVE_FROM_CART
`,
    {
        prefix: "menulist/"
    }
);
