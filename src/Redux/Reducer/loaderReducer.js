import { SHOW_LOADING,HIDE_LOADING} from "../Type/loaderType";


const loaderReducer = (state = {loading:false},action) =>{
    switch(action.type){
        case SHOW_LOADING:
            return { loading: true };
          case HIDE_LOADING:
            return { loading: false };
          default: return state;
    }   
}
export {loaderReducer}