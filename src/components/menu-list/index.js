import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MenuList from "./component";
import MenuActions from "./actions";
import CartActions from "../cart-list/actions";

const mapStateToProps = ({
    menuList: { menuItems, categories, activeCategory },
    shoppingCart: { cart }
}) => ({
    menuItems,
    categories,
    activeCategory,
    cart
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchMenu: MenuActions.fetchMenu,
    fetchCategories: MenuActions.fetchCategories,
    addToCart: CartActions.addToCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
