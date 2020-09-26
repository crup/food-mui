import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MenuList from "./component";
import CartActions from "../cart-list/actions";

const mapStateToProps = ({
    menuList: { menuItems, categories },
    shoppingCart: { cart, totalItems }
}) => ({
    menuItems,
    categories,
    cart,
    totalItems
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    removeFromCart: CartActions.removeFromCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
