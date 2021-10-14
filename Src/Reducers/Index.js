import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";

const reducers = {
    AuthReducer
};

export default combineReducers(reducers);