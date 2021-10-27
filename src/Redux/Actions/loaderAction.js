import {
    SHOW_LOADING,
    HIDE_LOADING
  } from "../Type/loaderType";

const showLoading = () => async(dispatch)=>{
  
    dispatch({type:SHOW_LOADING})
}
const hideLoading = () =>async(dispatch)=>{

   dispatch({type:HIDE_LOADING})
}
  export {showLoading,hideLoading}