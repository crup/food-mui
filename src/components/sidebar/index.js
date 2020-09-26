import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "./component";

const mapStateToProps = ({
    menuList: { categories },
}) => ({
  categories
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
