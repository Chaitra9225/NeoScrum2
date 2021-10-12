import React, { Component } from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

class Feedback extends Component{
    constructor(){
        super()
        this.state={
           Charac:"",
           Counter:0 
        }
    }
   chagedInText =(event)=>{
     this.setState({
         Charac:event,
         Counter:Counter+1
     })
   }


render(){
    return(
        <SafeAreaView>
        <ScrollView>
            <View style={{backgroundColor:'#f0f8ff' , flex:1}}> 
        <View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/girl.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Chaitra B</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>

        {/* 2nd  */}

        <View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/OIP.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Shashank Wankhede</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>


        {/* 3 */}

        <View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/OIP.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Akshat Jain</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>


        {/* 4 */}



         <View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/OIP.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Akash Kumavat</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>
        {/* 5 */}
        <View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/OIP.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Imran Shaikh</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>

{/* 5 */}
<View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/OIP.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Mohan kotak</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>

        {/* 6 */}

        <View style={{padding:10, backgroundColor:'white', borderWidth:1}}>
            <View style={{backgroundColor:'#87cefa',padding:10,borderWidth:1}}>
                        <View style={{padding:10,}} > 
                        <Image style={{alignSelf:"center",width:120,height:120,borderRadius:120/2}} source={require('../images/girl.jpg')} />
                       </View>
                       <View>
                        <Text style={{fontSize:22,fontWeight:"bold",alignSelf:"center"}}>Prachi Naik</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.chagedInText(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.Counter}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>


        </View>
        </ScrollView>
        </SafeAreaView>

    )
}
}

export default Feedback