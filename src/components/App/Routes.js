import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import AppRoute from "./AppRoute";
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

const Routes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>  
        <AppRoute
          path={"/app"}
          layout={DashboardLayout}
          component={DashboardComponent}
        />
        <AppRoute
          path={"/"}
          layout={EmptyLayout}
          component={HomepageComponent}
        />
      </Switch>
    </React.Suspense>
  );
};

Routes.propTypes = {};

export default Routes;
