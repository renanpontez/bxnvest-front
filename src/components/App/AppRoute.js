import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const AppRoute = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;

  return (
    <Route
      exact
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} cookies={props.cookies} />
        </Layout>
      )}
    />
  );
};

AppRoute.propTypes = {};

export default AppRoute;
