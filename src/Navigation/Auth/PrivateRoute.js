// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";


// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = {
      user:'steven'
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <>
          {children}
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;


