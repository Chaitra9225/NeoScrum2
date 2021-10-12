import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Authreducer from "./Authreducer";
const reducers ={
    Authreducer,
    form: formReducer
};

export default combineReducers(reducers);