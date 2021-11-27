import React, {useEffect, useCallback,useState} from 'react'
import { Redirect, Route } from 'react-router-dom'
import moment from 'moment'
import Cookie from 'js-cookie'
const BackwardRoute = ({ component: Component, isAuthenticated, ...rest }) => {
 


  
  return (
    <Route {...rest} render={
      props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />

    } />
  )
}

const ForwardRoute = ({ component: Component, isAuthenticated, ...rest }) => {

  return (
    <Route {...rest} render={
      props =>
        isAuthenticated() ? <Redirect to="/app" /> : <Component {...props} />

    } />
  )
}
export { BackwardRoute, ForwardRoute }
