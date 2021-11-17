import Index from '../Pages/AuthorizedPage/Index'
import {DASHBOARD} from './Constants'
import { Switch, Route,Redirect } from "react-router-dom";
import authVerify, { AuthVerify } from '../Common/auth-verify';
import Login from '../Pages/Login/Index.js'
import NotFound from '../Pages/NotFound.js'
import {ForwardRoute,BackwardRoute} from '../Navigation/Auth/PrivateRoute'
import {useSelector} from 'react-redux'
import Cookie from 'js-cookie'
import moment from 'moment'
export const RouterConfig = () =>{
    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo} = userSignin
    const yser = Cookie.get('lastTimeStamp')
    const checkAuth = () =>{
        if(userInfo){
            let tmpData = moment(yser)
            let tmpDatay = moment()
            let checked = tmpDatay.isSameOrAfter(tmpData)
           console.log(checked)
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
            <AuthVerify/>
              
            
        
        </Switch>
    )
}