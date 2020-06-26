/* eslint-disable complexity */

/* eslint-disable max-len */
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Configuration = ({
    children,
}) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    );
};

Configuration.propTypes = {
    children: PropTypes.any.isRequired
};

export default Configuration;
