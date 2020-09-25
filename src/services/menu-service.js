export default (api) => {

    const fetchMenu = (params) => {
        return api.get("/menu");
    };

    const fetchCategories = (params) => {
        return api.get("/categories");
    };

    return {
        fetchMenu,
        fetchCategories
    };
};
