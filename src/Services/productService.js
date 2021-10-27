import React from 'react'
import Axios from 'axios'
import authHeader from './auth-headers'
import {showLoading,hideLoading} from '../Redux/Actions/loaderAction'
import {useDispatch} from 'react-redux'
function CreateNewBrand(data) {
    const dispatch = useDispatch()
    const api = 'http://localhost:8080/api/product/' 
    return (
        Axios.post(api+'brand/create',data,{headers: authHeader()}).then(response =>{
            dispatch(hideLoading())
        }).catch(err=>{
            if(err.response){
                dispatch(hideLoading())
                alert(err.response.data.message)              
            }else{
                dispatch(hideLoading())
                alert(err.message)

            }    
        })
    )  
}

function CreateNewType() {
    return (
        <div>
            
        </div>
    )
}
export {CreateNewBrand}
