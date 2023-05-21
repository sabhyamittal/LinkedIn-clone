import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { legacy_createStore as createStore} from 'redux'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;