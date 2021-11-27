import { USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL,USER_SIGNOUT } from "../Type/userType";
import Cookie from 'js-cookie'

const user = Cookie.get('userInfo')
const initialState = user?{isLoggedIn:true,user}:{isLoggedIn:false,user:null}
const userSigninReducer = (state=initialState,action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return{loading:true}
        case USER_SIGNIN_SUCCESS:
            return{...state,loading:false,isLoggedIn:true,user:action.payload}
        case USER_SIGNIN_FAIL:
            return{...state,loading:false,isLoggedIn:false,user:null}
        case USER_SIGNOUT:
            return{...state,loading:false,isLoggedIn:false,user:null};
        default:return state;
    }
}

export {userSigninReducer}