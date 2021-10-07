// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie'
// screen if you're not yet authenticated.
function BackwardRoute({ children, ...rest }) {

  const userSignin = useSelector(state=>state.userSignin)
  const {error,loading,userInfo} = userSignin
  const user = Cookies.get('userInfo') || null
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user? (
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
export default BackwardRoute;


