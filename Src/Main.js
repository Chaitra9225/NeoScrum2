import React from 'react';
import Login from '../Component/Login'
import {Provider, connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {store} from './Store/StorePractice';

const Main = () => {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
};

export default connect(null,null) (Main);