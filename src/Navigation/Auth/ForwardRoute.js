// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import Cookies from 'js-cookie'
// screen if you're not yet authenticated.
function ForwardRoute({ children, ...rest }) {

  const usersignin = useSelector(state=>state.userSignin)
  const {error,loading,userInfo} = usersignin
  const user = Cookies.get('userInfo')
  return (  
    <Route
      {...rest}
      render={({ location }) =>
        user? (
          <Redirect
            to={{
              pathname: "/app",
              state: { from: location },
            }}
          />
        ) : (
          <>
          {children}
          </>
        ) 
      }
    />
  );
}
export default ForwardRoute;


