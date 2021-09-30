import Index from '../Pages/AuthorizedPage/Index'
import {DASHBOARD} from './Constants'
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './Auth/PrivateRoute';
export const RouterConfig = () =>{
    return(
        <Switch>
            <PrivateRoute path={DASHBOARD}>
                <Index/>
            </PrivateRoute>
            <Route path="*">
              
            </Route>
        </Switch>
    )
}