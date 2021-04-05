import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import User from "./user/Users";
import Signup from "./user/Signup";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Users" component={User} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};
export default MainRouter;
