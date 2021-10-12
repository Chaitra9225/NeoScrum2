import { createStore, applyMiddleware } from "redux";
import Reducers from "../Reducers";

const store = createStore( Reducers, {},applyMiddleware ());

export default store;
