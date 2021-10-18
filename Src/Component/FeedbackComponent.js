import React, { Component } from "react";
import { View,Image,Text,TouchableOpacity,TextInput,StyleSheet } from "react-native";
import { connect } from "react-redux";
import axios from "axios";



class FeedbackComponent extends Component{
   

    constructor(props) {
        super(props);
        this.state = {
          feedback: "",
          email: this.props.email,
          name: this.props.name,
          disabled:true,
          token:"",  
        };
      }
    
     
    
      onAddFeebackClick = async () => {
        const data = {
           token: this.props.token,
          email: this.props.email,
           feadback: this.state.feedback,
           name:this.props.name,
         };
         console.log(data)
        const config={
          method: "post",
          url: "https://quiet-harbor-07900.herokuapp.com/addFeadback",
          headers: {
            'accept':' */*',
                     'Authorization': `Bearer ${this.props.token}`,
                    'Content-Type': 'application/json',
          },
          data:data,
        };
        await axios(config)
              .then(response => {
                console.log(response);
                  if (response.status == 200) {
                    alert('Feedback Submitted');
                    this.setState({feedback:""})    
                  }
                else{
                    alert('Feedback not submitted!!')  
                }
              } )
                .catch((error) => {
                    console.log(error);
                    alert("Your feedback is not submitted or there might be network issue!!")
                    }  
                )
      };
      changedTextCount =(event) => {
        this.setState({feedback:event})
        if(this.state.feedback.length > 1 ||this.state.feedback.length <=100){
          this.setState({disabled:false})
          console.log(this.state.email)
        }
      }
           render(){
        return(
            <View>
                     <View style={style.mainView}>
                      <View style={style.secondView}>
                        <View style={style.thirdView} > 
                        <Image style={style.imagestyle} source={require('./images/OIP.png')} />
                       </View>
                       <View>
                        <Text style={style.nameText}>{this.state.name}</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10,}}>
                          <TextInput 
                          value={this.state.feedback}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10,textAlignVertical:"top"}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.changedTextCount(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.feedback.length}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 19,
                        height:50,
                        width:120,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }} onPress={()=>this.onAddFeebackClick()}>SUBMIT</Text>
                                </View>
                                </TouchableOpacity>
                                </View>
        </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
     token:state.data.token,
    };
  };
  const style = StyleSheet.create({
    mainView:{
      padding:10, backgroundColor:'white', borderWidth:0
    },
    secondView:{
      padding:10, backgroundColor:'white', borderWidth:3,borderBottomStartRadius:40,borderTopEndRadius:40,
      borderStyle:'dotted'
    },
    thirdView:{
      padding:10,
    },
    imagestyle:{
      alignSelf:"center",width:120,height:120,borderRadius:120/2
    },
    nameText:{
      fontSize:28,fontWeight:"bold",alignSelf:"center"
    }
  })

  
  export default connect(mapStateToProps,null)(FeedbackComponent)