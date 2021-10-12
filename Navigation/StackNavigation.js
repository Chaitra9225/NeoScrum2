import React, { Component } from 'react';
import Login from '../Component/Login';
import SignUp from '../Component/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../Component/HomePage'
import Feedback from '../Component/Feedback';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MyCustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator();
class Back extends Component{
  render(){
    return(
      <Drawer.Navigator screenOptions={
        ({route})=>({
      
        
          
      drawerIcon:({ color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Feedback') {
              iconName = 'comment';
            }
    
    
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
  drawerContent={(props)=><MyCustomDrawer{...props}/>} >
        <Drawer.Screen name="Home" component={HomePage}/>
        <Drawer.Screen name="Feedback" component={Feedback}/>
      </Drawer.Navigator>
    )
  }
}
class Front extends Component{
  render(){
    return(
      <Drawer.Navigator screenOptions={
        ({route})=>({
      
        
          
      drawerIcon:({ color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Feedback') {
              iconName = 'comment';
            }
    
    
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
  drawerContent={(props)=><MyCustomDrawer{...props}/>} > 
        <Drawer.Screen name="Feedback" component={Feedback}/>
        <Drawer.Screen name="Home" component={HomePage}/>
      </Drawer.Navigator>
    )
  }
}


const Tab = createBottomTabNavigator();
class  Main extends Component {
  render(){
    return (
      <Tab.Navigator screenOptions={
        ({route})=>({
          headerShown:false,
          keyboardHidesTabBar: true,
          tabBarStyle:{
            height:60,
             borderRadius:10,
             width:'90%',
            alignSelf:'center',
             bottom:10
           }, 
          tabBarIcon:({ color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Feedback') {
              iconName = 'comment';
            }
    
    
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen options={{tabBarLabel:'Home'}} name="Home" component={Back} />
        <Tab.Screen options={{tabBarLabel:'Feedback'}} name="Feedback" component={Front}/>
      </Tab.Navigator>
    );
  }
  }

const Stack = createNativeStackNavigator();
class Navigation extends Component{
    render(){
        return(
            <NavigationContainer >
    
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="SignUp" component={SignUp} />
               <Stack.Screen name="Add" component={Main}/>
           </Stack.Navigator>
             </NavigationContainer>
        )
    }
}
export default Navigation