import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Singup from "./pages/Singup";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/singup" component={Singup} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
