import { createStore, applyMiddleware } from "redux";
import reducers from '../Reducers';

let Store = createStore ( reducers,{},applyMiddleware())
