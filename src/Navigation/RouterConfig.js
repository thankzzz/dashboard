import Index from '../Pages/AuthorizedPage/Index'
import {DASHBOARD} from './Constants'
import { Switch, Route,Redirect } from "react-router-dom";
import PrivateRoute from './Auth/PrivateRoute';
export const RouterConfig = () =>{
    return(
        <Switch>
            <Route exact path="/"> <Redirect to="/app"/></Route> 
            <PrivateRoute path={DASHBOARD}>
                <Index/>
            </PrivateRoute>
            <Route path="*">
              
            </Route>
        </Switch>
    )
}