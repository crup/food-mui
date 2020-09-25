import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MenuList from "./component";
import Actions from "./actions";

const mapStateToProps = ({
    menuList: { menuItems },
}) => ({
    menuItems
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchMenu: Actions.fetchMenu,
    fetchCategories: Actions.fetchCategories,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
