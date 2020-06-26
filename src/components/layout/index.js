import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../header";
import Footer from "../footer";
import ErrorHandler from "../error-handler";
import '../../styles/tailwind.generated.css';

export default function withLayout(Component) {
    const Layout = (props) => {
        const getLayout = () => {
            return (
                <Fragment>
                    <ErrorHandler>
                        <Header {...props} />
                    </ErrorHandler>
                    <ErrorHandler>
                        <Component {...props} />
                    </ErrorHandler>
                    <ErrorHandler>
                        <Footer {...props} />
                    </ErrorHandler>
                </Fragment>
            );
        };
        return getLayout();
    };
    const mapStateToProps = () => ({});
    const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
    return connect(mapStateToProps, mapDispatchToProps)(Layout);
}
