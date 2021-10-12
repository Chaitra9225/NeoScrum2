import React, {Component} from 'react';
import {
  Text,
  TextInput,
  EditText,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Link,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp'; 
import {userLogin} from '../Src/actions/Action'
import {connect} from 'react-redux';

class Login extends Component {
  /* Constructor For State*/
  constructor() {
    super();
    this.state = {
      checkEmail: '',
      checkPassword: '',
      email:"",
      password:""
    };
  }
  onEmailChange(event) {
    let regx =/^[a-zA-Z]{1,}?([a-zA-Z1-9]{1,})?([_])?([.])?([a-zA-Z1-9]{1,})?([.])?([a-zA-Z1-9]{1,})[@]?([a-z]{1,})?([.])?([a-z]{1,})?([.])?([a-z]{1,})$/;
    this.setState({checkEmail: ''});
    if (event == '') {
      this.setState({checkEmail: 'Please enter Email'});
      this.setState({email:event})
    } else if (!regx.test(event)) {
      this.setState({checkEmail: 'Please Enter A valid Email'});
      this.setState({email:event})
    } else {
      this.setState({checkEmail: ''});
      this.setState({email:event})
    }
  }

  onPasswordCheck(f) {
    let reggexp = /^[a-zA-Z0-9]{8,12}$/;
    this.setState({checkPassword: ''});
    if (f == '') {
      this.setState({checkPassword: 'Please enter Password'});
      this.setState({password:f})
    } else if (!reggexp.test(f)) {
      this.setState({checkPassword: 'Alphanumeric Between 8 to 12 character'});
      this.setState({password:f})
    } else {
      this.setState({checkPassword: ''});
      this.setState({password:f})
    }
  }
 
  submit = () => {
    /* const {navigation} =this.props; */
    console.log('this.props.navigation', this.props.navigation);
    this.props.navigation.navigate('SignUp');
  };
  pasvis = () => {
this.setState({secureTextEntry:false})
  };
  log = () => {
     if (this.state.email=="admin" && this.state.password=="admin"){
       this.props.navigation.navigate('Add')
     }
     else{
       Alert.alert("Please Enter Details")
     }
  }
  

  

  render() {
    return (
      <View style={{backgroundColor: '#f0f8ff', flex: 1}}>
        <View style={styles.container1}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 50, color: 'black', fontWeight: 'bold'}}>
              Neo
            </Text>
            <Text style={{fontSize: 50, color: 'red', fontWeight: 'bold'}} > Scrum </Text>
          </View>
        </View>

        <View style={{paddingTop: 50}}>
          <Text style={{fontSize: 40, color: 'black', alignSelf: 'center',fontWeight:'bold'}}>
            Login
          </Text>
        </View>
        
        {/* Username */}
        <View>
          <View style={{paddingTop:20}}>
            <Text style={styles.Username}>Username</Text>
          </View>
          <View style={{width: Dimensions.get('window').width}}>
            <TextInput
              value={this.state.email}
              onChangeText={event => {
                this.onEmailChange(event);
              }}
              style={styles.inputField}
              placeholder="test@gmail.com"
            />
             <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}}>{user}</TouchableOpacity>
            <Text style={{paddingLeft: 10, color: 'red'}}>
              {this.state.checkEmail}
            </Text>
          </View>
        </View>
        {/* Password */}

        <View>
          <View>
            <Text style={styles.Username}>Password</Text>
          </View>
          <View style={{width: Dimensions.get('window').width}}>
            <TextInput
            value={this.state.password}
              type="password"
              onChangeText={f => {
                this.onPasswordCheck(f);
              }}
              style={styles.inputField}
              placeholder="*****"
              secureTextEntry={true}>
              
            </TextInput>
            <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}} onPress={() => this.pasvis()}>{eye}</TouchableOpacity>
            <Text style={{paddingLeft: 10, color: 'red'}}>
              {this.state.checkPassword}
            </Text>
          </View>
          <View style={{width: Dimensions.get('window').width, padding: 10,borderRadius:20}}>
          <TouchableOpacity onPress={() => {this.log()}}>
           <View style={{
              backgroundColor: '#6495ed',
             alignItems: 'center', 
                justifyContent: 'center',
               borderRadius: 25,
               height:50
                }}
  >
             <Text style={{ color: 'black',fontWeight:'bold' }}>Login</Text>
           </View>
             </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => this.submit()}>
            <Text style={{alignSelf:'center',fontWeight:'bold'}}> Don't Have a Account Sign up?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/* Icon For USer */
const user = <FontAwesome5 name={'user'} solid style={{fontSize:20}}/>;
/* Icon For Password */
const eye = <FontAwesome5 name={'eye-slash'} solid style={{fontSize:20}} />;
/* Styles */
const styles = StyleSheet.create({
  container1: {
    maxWidth: 500,
    justifyContent: 'center',
    paddingTop: 150,
  },
  Username: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight:'bold'
  },
  user: {
    position: 'absolute',
    right: 10,
  },
  inputField: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    paddingLeft: 10,
    fontSize:20,
  },
});
const mapStateToProps = (state) => {
  return {
    data: state.data.loginData,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

