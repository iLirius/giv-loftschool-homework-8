import * as React from "react";
import { Route, PrivateRoute, Switch, Redirect } from "react-router-dom";
import AuthPage from "../AuthPage";
import UserPage from "../UserPage";

class AppRouter extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={AuthPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
