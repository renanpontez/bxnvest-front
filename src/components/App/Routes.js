import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
import uuid from "uuid/v4";
import { useCookies } from "react-cookie";

import EmptyLayout from "../_shared/layouts/EmptyLayout";
import DashboardLayout from "../_shared/layouts/DashboardLayout";

const HomepageComponent = React.lazy(() =>
  import("../pages/home/HomepageComponent")
);
const DashboardComponent = React.lazy(() =>
  import("../pages/dashboard/DashboardComponent")
);
const InvestmentsResultsComponent = React.lazy(() =>
  import("../pages/investment/InvestmentsResultsComponent")
);

const Routes = (props) => {
  const [cookies, setCookie] = useCookies(["user-uuid"]);

  React.useEffect(() => {
    //handle user Uuid
    handleUserUuid();
  }, []);

  const handleUserUuid = () => {
    if (!cookies["user-uuid"]) {
      setCookie("user-uuid", uuid(), {
        maxAge: 2147483647,
        path: "/",
      });
    }
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AppRoute
          path={"/app"}
          layout={DashboardLayout}
          component={DashboardComponent}
          cookies={props.cookies}
        />
        <AppRoute
          path={"/"}
          layout={EmptyLayout}
          component={HomepageComponent}
          cookies={props.cookies}
        />
      </Switch>
    </React.Suspense>
  );
};

Routes.propTypes = {};

export default Routes;
