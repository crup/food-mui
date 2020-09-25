import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "./component";

const mapStateToProps = ({
    shoppingCart: { totalItems },
}) => ({
  totalItems
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
