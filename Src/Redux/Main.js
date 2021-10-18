import React from 'react';

import Login from '../Component/Login'
import {Provider} from 'react-redux';
import {store} from './Store/StorePractice';

const hello = () => {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
};

export default hello;