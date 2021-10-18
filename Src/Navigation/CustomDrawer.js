import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import React, { Component } from "react";
import { Text, View ,Image, _Text } from "react-native";
import { connect } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo';
import { logout } from "../Redux/actions/Action";




class MyCustomDrawer extends Component{
constructor(props){
    super(props)
}


render(){

   return(
    <DrawerContentScrollView {...this.props}>
        <View style={{flexDirection:"column",justifyContent:"space-between"}}>
        <View>
            <View>
                   <View>
                       <View>
                       <Image style={{alignSelf:"center"}} source={require('../Component/images/girl.png')} />
                       </View>
                       <Text></Text>
                   <Text style={{alignSelf:"center", fontSize:30}}>
                        {this.props.name}
                    </Text>
                    <Text style={{alignSelf:'center',fontSize:15}}>
                        {this.props.email}
                    </Text>
                    <Text></Text>
                    </View>
            </View>

        </View>
        <DrawerItemList{...this.props}/>
        </View>
        <View style={{paddingTop:270}}>
            <Text style={{fontSize:28 ,alignSelf:"flex-start",color:"red",left:30}} onPress={()=>this.props.logout()}>{user} SignOut</Text>
        </View>
    </DrawerContentScrollView>
   )
}}

const user = <Entypo name={'log-out'} solid style={{fontSize:20}}/>;
const mapStateToProps = (state) => {
    return{
name:state.data.name,
email:state.data.email
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        logout: () => dispatch(logout()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCustomDrawer)