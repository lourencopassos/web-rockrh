import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={SignUp} exact path="/cadastro" />
      </Switch>
    </BrowserRouter>
  );
}
