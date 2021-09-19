import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { guestRoutes, userRoutes } from "./routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

const AppRouter = () => {
  const user: boolean = true;
  return user 
  ? (
    <Switch>
      {userRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  )
  : (
    <Switch>
      {guestRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
