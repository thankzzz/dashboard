import Index from '../Pages/AuthorizedPage/Index'
import {DASHBOARD} from './Constants'
import { Switch, Route,Redirect } from "react-router-dom";
import PrivateRoute from './Auth/PrivateRoute';
import Login from '../Pages/Login/Index.js'
import NotFound from '../Pages/NotFound.js'
export const RouterConfig = () =>{
    return(
        <Switch>

            <Route exact path="/"> <Redirect to="/app"/></Route> 
            <PrivateRoute path={DASHBOARD}>
                    <Index/>
            </PrivateRoute>
            <Route exact path="/login" component={Login}/>

            <Route path="*" component={NotFound}/>
              
            
        
        </Switch>
    )
}