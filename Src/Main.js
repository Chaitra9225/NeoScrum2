import React from 'react';
import Login from '../Component/Login'
import {Provider, connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {store} from './Store/StorePractice';
import AuthReducer from './Reducers/AuthReducer';

const Main = () => {
    const {createUser} = this.props;
  return (
    <Provider store={store}>
      <Login isLoggedIn={this.props.createUser.isLoggedIn}/>
    </Provider>
  )
}


mapStateToProps = state => ({
createUser: state?.AuthReducer?.createUser
})

export default connect(mapStateToProps,null) (Main);