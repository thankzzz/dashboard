import Index from '../Pages/AuthorizedPage/Index'
import {DASHBOARD} from './Constants'
import { Switch, Route,Redirect } from "react-router-dom";

import Login from '../Pages/Login/Index.js'
import NotFound from '../Pages/NotFound.js'
import {ForwardRoute,BackwardRoute} from '../Navigation/Auth/PrivateRoute'
import {useSelector} from 'react-redux'
export const RouterConfig = () =>{
    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo} = userSignin
    const checkAuth = () =>{
        if(userInfo){
            return true
        }else{
            return false
        }
    }
    return(
        <Switch>

            <Route exact path="/"> <Redirect to="/app"/></Route> 
            <BackwardRoute path={DASHBOARD} component={Index} isAuthenticated={()=>checkAuth()}/>                
             <ForwardRoute exact path="/login" component={Login} isAuthenticated={()=>checkAuth()}/>               
            <Route path="*" component={NotFound}/>
              
            
        
        </Switch>
    )
}