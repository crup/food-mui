import React, { Component } from "react";
import PropTypes from "prop-types";
class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        console.log(info);
        this.setState({ hasError: true });
    }

    render() {
        return this.state.hasError ? <React.Fragment /> :  this.props.children;
    }
}

ErrorHandler.propTypes = {
    children: PropTypes.any
};

export default ErrorHandler;
