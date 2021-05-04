import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import App from "./App";
import SignUp from "./SignUp/index";
import SignIn from "./SignIn/index";
import { LoginContext } from "./global/LoginContext";

const BrowserRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <PrivateRoute path="/" exact component={App} />
      </Switch>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )
      }
    ></Route>
  );
};

export default BrowserRoutes;
