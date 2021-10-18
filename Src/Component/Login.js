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
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp'; 
import {rawdata} from '../Redux/actions/Action'
import {connect} from 'react-redux';
import axios from 'axios';

class Login extends Component {
  /* Constructor For State*/
  constructor(props) {
    super(props);
    this.state = {
      checkEmail: '',
      checkPassword: '',
      email:"",
      password:"",
      token:'',
     Fee:'',
     name:'',
     psw: true
    };
  }
  onEmailChange(event) {
    let regx =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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




  log = () => {
     if (this.state.email!="" && this.state.password!=""){

       let data ={email:this.state.email,password:this.state.password}
       this.onLogged()

       

    
     }
  }
  
  onLogged = async () => {
    var config = {
      method: "post",
      url: "https://quiet-harbor-07900.herokuapp.com/DeveloperSignin",
      headers: {
        "Content-Type": "application/json",
      },
      data:{'email':this.state.email,'password':this.state.password},
  }; 

  try {
      const response = await axios(config)
      console.log(response.data)
      
      if (response.status==200){
        Alert.alert("Hello weclome")
        
        console.log ("feedback in login page",response.data.UserLogin.Feadbacks)
        this.setState({
          name:response.data.UserLogin.name,
          email: response.data.UserLogin.email,
          token : response.data.UserLogin.token,
          Fee :response.data.UserLogin.Feadbacks
        })
        console.log("state  after feeback login",this.state.Fee)
        this.LoginUser (this.state.name,this.state.email,this.state.token,this.state.Fee)
            }




     }
      
      catch(err){
        console.log(err)
      Alert.alert("Please enter correct Details")
      
      }

  }

  LoginUser=(name,email,token,Fee)=>{
    var data = {name,email,token,Fee}
    console.log("hahahaha", data)
    this.props.rawdata(data)
  }



  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={{flex:1}}>
      <View style={{backgroundColor: '#f0f8ff', flex: 1}}>
        <View style={styles.container1}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 50, color: 'black', fontWeight: 'bold'}}>
              Neo
            </Text>
            <Text style={{fontSize: 50, color: 'red', fontWeight: 'bold'}} > Scrum </Text>
          </View>
        </View>

        <View style={{paddingTop: 30}}>
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
              placeholder="*********"
              secureTextEntry={this.state.psw}>
              
            </TextInput>
            <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}} onPress={()=>{this.setState({psw:false})}}>{eye}</TouchableOpacity>
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
             <Text style={{ color: 'black',fontWeight:'bold', fontSize:20 }}>LOGIN</Text>
           </View>
             </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => this.submit()}>
            <Text style={{alignSelf:'center',fontWeight:'bold'}}> Don't Have a Account Sign up?</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
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
    paddingTop: 110,
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
    data: state.data.rawdata,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    rawdata: (data) => dispatch(rawdata(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

