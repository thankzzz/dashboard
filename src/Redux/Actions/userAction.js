import Axios from 'axios'
import Cookie from 'js-cookie'
import { USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL,USER_SIGNOUT } from '../Type/userType'

const signin = (userData)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST})    
    try{
        const {data} = await Axios.post(process.env.REACT_APP_API_URL + 'users/signin',userData)
        const expireTime = new Date(new Date().getTime() + 120 * 60 * 1000 )
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data})
        Cookie.set('userInfo',JSON.stringify(data),{expires:expireTime}) 
        Cookie.set('lastTimeStamp',expireTime)
    }catch(err){
        if(err.response){
            dispatch({type:USER_SIGNIN_FAIL,payload:err.response.data.message})
        }else{
            dispatch({type:USER_SIGNIN_FAIL,payload:err.message})
        }      
    }
}

const signout = () =>async(dispatch)=>{
        Cookie.remove("userInfo");
        dispatch({type:USER_SIGNOUT})
}
export {signin,signout}