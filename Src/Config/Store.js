import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import reducers from '../Reducers/AuthReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:["AuthReducer"]
  }

const persistedReducer = persistReducer(persistConfig, reducers );
 

  export const store = createStore(persistedReducer, {}, applyMiddleware(thunk))
  export const persistor = persistStore(store)

