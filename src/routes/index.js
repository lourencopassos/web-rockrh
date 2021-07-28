import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeDashboard from "../pages/EmployeeMain";
import LoginEmployee from "../pages/LoginEmployee";
import LoginManager from "../pages/LoginManager";
import EvaluationDetail from "../pages/EvaluationDetail/EvaluationDetail";
import FeedbackDetail from "../pages/FeedbackDetail/FeedbackDetail";

import SignUp from "../pages/Signup";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginEmployee} exact path="/funcionario/login" />
        <Route
          component={EmployeeDashboard}
          exact
          path="/funcionario/dashboard"
        />
        <Route
          component={EmployeeDashboard}
          exact
          path="/funcionario/dashboard"
        />
        <Route component={LoginManager} exact path="/gerente/login" />
        <Route component={EvaluationDetail} exact path="/avaliacao/:id" />
        <Route component={FeedbackDetail} exact path="/feedback/:id" />
        <Route component={SignUp} exact path="/cadastro" />
      </Switch>
    </BrowserRouter>
  );
}
