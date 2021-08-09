import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Welcome from "../welcome/welcome";

export default function RouterTry() {
  const { path, url } = useRouteMatch();
  // console.log(url); // menu
  return (
    <div>
      <ul>
        <li>
          <Link to={`${path}/welcome`}>Home</Link>
        </li>
        <li>
          <Link to={`${path}/item1`}>Topics</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/menu/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/menu/item1">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}
