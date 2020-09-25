import baseApi from "./api";
import menuApi from "./menu-service";

const MenuService = menuApi(baseApi);

export {
    MenuService
};
