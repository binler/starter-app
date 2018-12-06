import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

export const initStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())))
}