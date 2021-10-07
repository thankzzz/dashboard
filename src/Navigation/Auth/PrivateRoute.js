import React from 'react'
import {Redirect,Route} from 'react-router-dom'

const BackwardRoute = ({ component: Component,isAuthenticated,...rest }) => {
    
    return (
      <Route {...rest} render={
        props => 
          isAuthenticated()?<Component {...props}/>:<Redirect to="/login"/>
        
      } />
    )
  }

  const ForwardRoute = ({ component: Component,isAuthenticated,...rest }) => {
    
    return (
      <Route {...rest} render={
        props => 
          isAuthenticated()?<Redirect to="/app"/>:<Component {...props}/>
        
      } />
    )
  }
export {BackwardRoute, ForwardRoute}
