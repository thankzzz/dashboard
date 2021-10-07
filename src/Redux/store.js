import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';

import { userSigninReducer } from './Reducer/userReducer';
const userInfo = Cookies.get('userInfo') || null;
const initialState = {
    userSignin:{userInfo}
}

const reducer = combineReducers({
    userSignin:userSigninReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

  export default store