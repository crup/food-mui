import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "./component";
import Actions from "../menu-list/actions";

const mapStateToProps = ({
    menuList: { categories, activeCategory },
}) => ({
  categories,
  activeCategory
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActiveCategory: Actions.setActiveCategory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
