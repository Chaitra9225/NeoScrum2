import React,{Component} from "react";
import { Text, TextInput,EditText, View,StyleSheet,Dimensions,Button,Link,TouchableOpacity, Alert,Image } from 'react-native';
import { connect } from "react-redux";
import ImagePicker from 'react-native-image-crop-picker';
import { block, event } from "react-native-reanimated";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Field, reduxForm } from 'redux-form';
import { Actions } from "react-native-router-flux";
import { compose } from "redux";
import { createNewUser } from "../Actions/AuthActions"



class SignUp extends Component{ 
    constructor( ) {
        super();
        this.state = {
            img:'null',
          checkEmail: '',
          checkPassword: '',
          email:"",
          password:""
        };
      }

      takephoto=()=>{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
          this.setState({img:image.path})
          this.setState({backfaceVisibility:visible})
        }).catch(e=>console.log(e));
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

      createNewUser = (values) => {
        this.props.dispatch(createNewUser(values));
      }
     
      
      log = (values) => {
         this.createNewUser(values);
      }





     
    submit =()=>{
        /* const {navigation} =this.props; */
       
        this.props.navigation.navigate('Login');
    
        }



    render(){
        return(

             <View style={{backgroundColor: `#f0f8ff`,flex:1}} >
              <View style={styles.container1}>
                  <View style={{flexDirection: 'row', alignSelf:"center"}}>
                  
                  <Text style={{fontSize:50 , color:'black',fontWeight:"bold"   }}>Neo</Text>
                  
                
                  <Text style={{fontSize:50 , color:'red',fontWeight:"bold"   }}>Scrum</Text>
                  
                  </View>
              </View>  
              
                  <View style={{paddingTop:30,}} >
                  <Text style={{fontSize:30 , color:'black', alignSelf:"center",fontWeight:"bold"   }}>Register</Text>
                  </View>
                 
                  
              <View>
                 <View style={{paddingTop:25}}>
                 <Text style={styles.Username}>UserName</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput value={this.state.email} style={{height: 40,fontSize:20,margin: 12, borderBottomWidth: 2,paddingLeft: 10,}} placeholder="test@gmail.com" onChangeText={(event)=>{this.onEmailChange(event)}}/ >
                 <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}}>{user}</TouchableOpacity> 
                 <Text style={{paddingLeft: 10, color: 'red'}}>{this.state.checkEmail}</Text>   
                 </View>
                 <View stle={{paddingTop:20}}>
                 <Text style={styles.Username}>Password</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput value={this.state.password} style={{height: 40,fontSize:20,margin: 12, borderBottomWidth: 2,paddingLeft: 12,}} placeholder="*****" onChangeText={(f)=>{this.onPasswordCheck(f)}} />
                <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}}>{eyeSlash}</TouchableOpacity>
                <Text style={{paddingLeft: 10, color: 'red'}}>{this.state.checkPassword}</Text>  
                 </View>
                 <View style={{paddingTop:15}}>
                     <Text onPress={this.takephoto} style={{alignSelf:"center",fontSize:18}}>{ADDICON} Add a Picture</Text>
                     <View style={{borderRadius:15,justifyContent:'center',alignItems:'center'  }}>
                  <Image source={{uri:this.state.img}} style={{justifyContent:'center',alignItems:'center',backfaceVisibility:'hidden'}} height={100} width={100}/>
                  </View>
                 </View>   
            </View>  

            <View style={{width: Dimensions.get('window').width, padding: 10,paddingTop:20,borderRadius:20}}>
          <TouchableOpacity onPress={() => {this.log()}}>
           <View style={{
              backgroundColor: '#6495ed',
             alignItems: 'center', 
                justifyContent: 'center',
               borderRadius: 25,
               height:50
                }}
  >
             <Text style={{ color: 'black',fontWeight:'bold',fontSize:20 }}>Register</Text>
           </View>
             </TouchableOpacity>
          </View>
           
            <TouchableOpacity onPress={() => this.submit()} style={{paddingTop:10}}>
                    <Text style={{fontWeight:"bold",alignSelf:"center"}}> Don't Have a Account Sign up?</Text>
                    </TouchableOpacity>
             



       
        </View>    
        )
    }

}


const ADDICON = <FontAwesome5 name={'plus'} solid style={{fontSize:15}} />;
const eyeSlash = <FontAwesome5 name={'eye-slash'} solid style={{fontSize:20}} />;
const user = <FontAwesome5 name={'user'} solid style={{fontSize:20}} />;




const styles = StyleSheet.create({
    container1:{
        maxWidth: 500,
       
       justifyContent:"center",
       paddingTop:100,
    },
    Username:{
        fontWeight:"bold",
        fontSize:18,
        paddingLeft:10
    },
    
    })


const mapDispatchToProps = (dispatch) => {
  return {
    
     dispatch
  };
};

export default compose(connect(null,mapDispatchToProps))(SignUp);

//export default connect(null,null)(SignUp);