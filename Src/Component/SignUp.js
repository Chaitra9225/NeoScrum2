import React,{Component} from "react";
import { Text, TextInput,EditText, View,StyleSheet,Dimensions,Pressable,Button,Link,TouchableOpacity, Alert,Image,KeyboardAvoidingView , Modal} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { block, event } from "react-native-reanimated";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";


class SignUp extends Component{ 
    constructor( ) {
        super();
        this.state = {
          img:{},
          imguri:null,
          checkEmail: '',
          email:"",
          only:'',
          name:'',
          checkname:'',
          hit:0,
          wid:0,
          modalVisible: false
        };
      }

      takephoto=()=>{
        ImagePicker.openCamera({
          cropping: true,
        }).then(image => {
          console.log(image);
          this.setState({hit:130})
          this.setState({img:image.path})
          this.setState({imguri:image.path})
        
          var name = image.path;
             this.setState({only : name.replace(/^.*[\\\/]/, '')})
        }).catch(e=>console.log(e));
      }

      onEmailChange(event) {
        let regx =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.setState({checkEmail: ''});
        if (event == '') {
          this.setState({checkEmail: 'Please enter Email'});
          this.setState({email:event})
          return false 
        } else if (!regx.test(event)) {
          this.setState({checkEmail: 'Please Enter A valid Email'});
          this.setState({email:event})
          return false                 
        } else {
          this.setState({checkEmail: ''});
          this.setState({email:event})
          return true
        }
      }
    
      onNameChange(f) {
        let reggexp = /^[a-zA-Z]{3,12}$/;
        this.setState({checkname: ''});
        if (f == '') {
          this.setState({checkname: 'Please enter Name'});
          this.setState({name:f})
          return false
        } else if (!reggexp.test(f)) {
          this.setState({checkname: 'Name Should minimum of 3 character'});
          this.setState({name:f})
          return false
        } else {
          this.setState({checkname: ''});
          this.setState({name:f})
          return true
        }
      }



      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }


      
      log  ()  {
         if (this.state.email!="" || this.state.name!="" || this.state.imguri!=""){
                  this.onPostData()
           }
           else{
            Alert.alert("Please Enter Correct Details")
          }
        
        }
        
      submit =()=>{       
        this.props.navigation.navigate('Login');
        }

          //const {navigation}= this.props;
      


        onPostData = async () => {
          
          var data = new FormData();
          let headers = {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        };
              let imgdata ={uri:this.state.img,
                    name:this.state.only,
                    type:'image/jpg'}
             console.log("image data",imgdata)
                   data.append('name',this.state.name);
               data.append('email',this.state.email);
                      data.append('profileImage',imgdata);
               console.log(" form data", data)
  
  
         return await axios.post('https://quiet-harbor-07900.herokuapp.com/register',data
              ,{
      
              "headers": {headers},})
          
              .then(function (response) {
             
                if (response.status == 200) {
                  console.log('Register');
                  console.log(response.data);
                Alert.alert(
                    "successfully registered",
                    "Your password is : "  + response.data.password,
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                     { text: "OK", onPress: () => this.props.navigation.navigate('Login') }
                    ]
                  ); 
                // Alert.alert(`Password ${response.data.password} Please take Screenshot of it`);
                //  this.props.navigation.navigate('Login');
                  return response;
                 
                }
                else{
                  console.log("Some error is generating... please make sure you have filled all the field with proper credentials")
                  Alert.alert("Some error is generating... please make sure you have filled all the field with proper credentials")
                } })
                 }


    onModal= () => {
      const { modalVisible } = this.state;
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        this.setModalVisible(!modalVisible);
      }}
    >

<View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>

      </Modal>
    }



  

    render(){
        return(
          <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={{flex:1}}>
      
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
                 <Text style={styles.Username}>Full Name</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput value={this.state.name} style={{height: 40,fontSize:20,margin: 12, borderBottomWidth: 2,paddingLeft: 10,}} placeholder="UserName" onChangeText={(f)=>{this.onNameChange(f)}} />
                 <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:15}}>{user}</TouchableOpacity> 
                 <Text style={{paddingLeft: 10, color: 'red'}}>{this.state.checkname}</Text>   
                 </View>
                 <View stle={{paddingTop:20}}>
                 <Text style={styles.Username}>Email</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput value={this.state.email} style={{height: 40,fontSize:20,margin: 12, borderBottomWidth: 2,paddingLeft: 12,}} placeholder="UserName@gmail.com"  onChangeText={(event)=>{this.onEmailChange(event)}} />
                <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:15}}>{eyeSlash}</TouchableOpacity>
                <Text style={{paddingLeft: 10, color: 'red'}}>{this.state.checkEmail}</Text>  
                 </View>
                 <View style={{paddingTop:5}}>
                     <Text onPress={this.takephoto} style={{alignSelf:"center",fontSize:18}}>{ADDICON} Add a Picture</Text>
                     <View style={{borderRadius:15,justifyContent:'center',alignItems:'center'  }}>
                  <Image source={{uri:this.state.imguri}} style={{justifyContent:'center',alignItems:'center',backfaceVisibility:'hidden'}} height={this.state.hit} width={130}/>
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
                    <Text style={{fontWeight:"bold",alignSelf:"center"}}> Already Have an Account Sign In?</Text>
                    </TouchableOpacity>
        </View>    
        </KeyboardAvoidingView>
        )
    }

}


const ADDICON = <FontAwesome5 name={'plus'} solid style={{fontSize:20}} />;
const eyeSlash = <FontAwesome5 name={'envelope'} solid style={{fontSize:25}} />;
const user = <FontAwesome5 name={'user'} solid style={{fontSize:25}} />;





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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
    
    })


export default SignUp