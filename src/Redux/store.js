import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import { loaderReducer } from './Reducer/loaderReducer';
import { userSigninReducer } from './Reducer/userReducer';


const reducer = combineReducers({
    userSignin:userSigninReducer,
    loading: loaderReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
  );

  export default store