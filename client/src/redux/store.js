import AuthReducer from "./reducer/Reducer";
//import PostReducer from "./reducer/PReducer";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
//import { combineReducers } from 'redux';


const devtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(AuthReducer, compose(applyMiddleware(thunk), devtool));

export default store;