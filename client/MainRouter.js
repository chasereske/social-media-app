import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import User from "./user/Users";
import Signup from "./user/Signup";
import Signin from "./auth/Signin";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Users" component={User} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  );
};
export default MainRouter;
